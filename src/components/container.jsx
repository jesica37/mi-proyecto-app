function Container(props) {
    console.log("Props de container", props)

    return (
        <>
            <p>{props.saludo}</p>
        </>
    )
}
export default Container