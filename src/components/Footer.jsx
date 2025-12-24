

export default function Footer(props){

    const { handleToggleModal} = props
    const {data} = props
    return(
        <>
        <footer>
            <div className="bgGradient"></div>
            <div>
                <h2>{data?.title}</h2>
                <h1>APOD PROJECT</h1>
            </div>
            <button onClick={handleToggleModal}><i className="fa-solid fa-info"></i></button>
        </footer>   
        </>
    )
}