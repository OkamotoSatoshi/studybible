import {readJson,treeFormat} from "/library/common.js"
import { promises as fs } from 'fs';


export default async function getTree(req,res){
    let data = await readJson("tree.json")
    data = JSON.parse(data)
    let data1 = treeFormat(data)
    console.log(data1,"data1")
    // 将 JSON 数据转换成字符串
    const jsonString = JSON.stringify(data1.data, null, 2);

    // 将字符串写入文件
    fs.writeFile(process.cwd()+"/public/"+'tree1.json', jsonString);
    res.status(200).json({status:true,data:data1})
    
}