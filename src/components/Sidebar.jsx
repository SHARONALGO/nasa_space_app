

export default function Sidebar(props){


    const {handleToggleModal, data} = props
    
    return (
        <div className="sideBar" onClick={handleToggleModal}>
            <div className="bgOverlay"></div>
            <div className="sideContents">
                {/* optional chaining it prevent sthe app from crashing nothing will be displayed if the app doesnot exist */}
                <h2>{data?.title} </h2>
                <div className="descContainer">
                    <p className="descTitle">{data?.date}</p>
                    <p>{data?.explanation}</p>
                </div>
                <button onClick={handleToggleModal} >
                    <i className="fa-solid fa-arrow-right-arrow-left"></i>
                </button>
            </div>
     1   </div>
    )
}

