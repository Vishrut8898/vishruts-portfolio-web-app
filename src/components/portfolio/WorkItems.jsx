const WorkItems = ({ item }) => {
    return (
        <div className="work__card" key={item.id}>
            <img src={item.image} alt="" className='work__img' />
            <h3 className="work__title">{item.title}</h3>
            <a href={item.link} target="_blank" className="work__button">
                Live Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
            </a>
            <a href={item.code_link} target="_blank" className="work__button">
                Git Code <i className="bx bx-right-arrow-alt work__button-icon"></i>
            </a>
        </div>
    )
}

export default WorkItems
