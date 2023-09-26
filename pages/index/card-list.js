import Router from "next/router"

export default function CardList(){
    return(
        <section className="section">    
            <div className="row justify-content-center">
                <div className="book shadow-inset border-light col-lg-3  col-12 m-3">
                    <div className="ml-4 ">
                        <small className="text-muted">
                            &nbsp;&nbsp;&nbsp;&nbsp; 这里收集了《圣经》中提到的一千多个人物和关系，出身、章节、妻子、儿子数量等等...
                        <br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;这个功能有数据同时也提供了[索引]、[下载]、[放大缩小]、[全屏]等功能。
                        </small>

                         <button  className="book-btn mt-5 shadow-soft" onClick={()=>{
                            Router.push(`/family`)
                        }}>
                            使 &nbsp;&nbsp; 用
                        </button>
                    </div>
                    <div className="cover shadow-soft text-center">
                        <div className="profile-image bg-primary shadow-inset border  rounded-circle p-3 ml-3 mt-n5">
                            <img src={`/bible.png`} className="card-img-top rounded-circle" alt="Christopher Avatar" />
                            <p className="mt-4">家族谱</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
