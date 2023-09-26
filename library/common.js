import { promises as fs } from 'fs';


export async function readJson(filename){
    const file =  process.cwd()+"/public/"+filename
    let data =  await fs.readFile(file, 'utf-8');
    return data
}

export function treeFormat(json){

    let pramas = {
        data:[
            {id:1,"名字":json.name,Born:"3924-2994(公元前) 930岁","妻子":json.spouse,"圣经":json.detail,son:"生"+json.children.length+"儿"},
        ],
        children:[{pid:1,children:json.children}],
        lastId:1
    }
    let res = thisInfo(pramas) 
    console.log(res,"res....")
    return res
/**
 * 计算当前层级的格式资料
 * @param {下级的所有数据} children 
 * @param {前面统计的所有需要的格式} data 
 * @param {当前Id} id 
 * @returns 
 */
    function thisInfo(pramas){
        var hasson = [] ; // test
        let children = pramas.children;
        for(let i=0 ;i < children.length ; i++){
            let person = children[i].children
            let pid = children[i].pid
            for(let j=0;j<person.length;j++){
                var info = {
                    id:pramas.lastId+1,
                    "名字":person[j].name,
                    "圣经":person[j].detail,
                    pid:pid
                }

                //个人信息
                let son = 0 ; let born = "" ;

                //统计儿子数量
                if(person[j].children != undefined){
                    son =  person[j].children.length
                    if(son > 0 ) info.Son = `生${son}儿`
                } 


                //统计出生岁数
                if(person[j].birth !=undefined && person[j].death !=undefined ){
                    let birth = parseInt(person[j].birth) , death = parseInt(person[j].death) ,sta = ""
                    birth > death ? sta = "公元前" : sta = "公元"
                    born = `${person[j].birth}-${person[j].death}(公元前) ${Math.abs(birth-death)}岁`
                    info.Born = born
                } 

                //统计妻子
                if(person[j].spouse != undefined){  //有妻子资料
                    //男性资料录入
                    info["妻子"] = person[j].spouse
                }
                
                pramas.data.push(info)
                pramas.lastId = info.id
                
                //孩子
                if(son >0) hasson.push({pid:info.id,children:person[j].children})
                pramas.children = hasson

            }
            
        }

        // 添加递归终止条件
        if (hasson.length > 0) {
            pramas.children = hasson;
            thisInfo(pramas);
        }
        return pramas
    }
}