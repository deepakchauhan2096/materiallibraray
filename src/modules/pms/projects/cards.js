import React from 'react'




const Cards = (props) => {
       
     const {title, authorname, image, date, like, view, save, comment , project} = props;


    return (
        <>
                <div class="column_pms">
                    <div className="content_pms">
                        <img src={image} className="project_card_image" alt="Lights" />
                        <div className="card_cross">{project}</div>
                        <div className="card_checkbox"><input className="checkbox_input" type="checkbox" /></div>
                        <div className='card_content'>
                            <div className='card_date'>{date}</div>
                            <div className="card_title">{title}</div>
                            <div className="card_author">{authorname}</div>
                            <div className='remark'>
                                <div className="remark_item"><span> <img className="card_image" src="icons/heart.svg" alt="mail" />{like}</span></div>
                                <div className="remark_item"><span> <img className="card_image" src="icons/view.svg" alt="view" />{view}</span></div>
                                <div className="remark_item"><span> <img className="card_image" src="icons/save.svg" alt="save" />{save}</span></div>
                                <div className="remark_item"><span> <img className="card_image" src="icons/comment.svg" alt="comment" />{comment}</span></div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Cards