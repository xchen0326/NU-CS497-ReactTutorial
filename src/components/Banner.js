const Banner = ({ title }) => {
    return (
        <>
            <h1>{ title }</h1>
            <h2 style={{color: "red"}}>
                ** The admin user is the web creator, please contact her to add you as the admin user if there is a need. Only admin user can edit courses. **
            </h2>
        </>
    )
}
export default Banner;