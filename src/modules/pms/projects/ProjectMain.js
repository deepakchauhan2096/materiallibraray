import React from 'react'
import Cards from "./cards"
import AddProject from './AddProjectBasic'
import DeleteProject from './DeleteProject'
 

const CardData = [{
    "title": "Project Title biggy title no no big tis...",
    "authorname": "Author Name",
    "image": "card/Rectangle_1.png",
    "date": "20-May-2022",
    "like": "400",
    "view": "1002",
    "save": "1002",
    "comment": "1098"
},
{
    "title": "Project Title biggy title no no big tis...",
    "authorname": "Author Name",
    "image": "card/Rectangle_1.png",
    "date": "20-May-2022",
    "like": "400",
    "view": "1002",
    "save": "1002",
    "comment": "1098"
},
{
    "title": "Project Title biggy title no no big tis...",
    "authorname": "Author Name",
    "image": "card/Rectangle_1.png",
    "date": "20-May-2022",
    "like": "400",
    "view": "1002",
    "save": "1002",
    "comment": "1098"
}

]


const ProjectMain = () => {
    return (
        <div class="card_container_main">
            <div className="row_pms">
                {/* add_new */}
                <div className="column_pms">
                <AddProject/> 
                </div>
                {/* add new */}
                {CardData.map((item) =>
                    <Cards 
                        project = {<DeleteProject/>}
                        title={item.title}
                        authorname={item.authorname}
                        image={item.image}
                        date={item.date}
                        like={item.like}
                        view={item.view}
                        save={item.save}
                        comment={item.comment}
                    />
                )}
            </div>
        </div>
    )
}

export default ProjectMain