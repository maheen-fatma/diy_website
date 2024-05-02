function Params()
{
    return(
        <>
        <div className="p-5 ">
            <h1 className="text-6xl font-bold text-center m-9">Passing Parameters in the URL</h1>
        <div className="m-8 mt-10 text-3xl font-serif">This website also responds to the URL. First, go to home and then follow any of these steps
            <br />
            1. In the url, type '/user/(text)' and it will display your text.
            <br />
            2. In the url, type '/github/(github-id)' to view the github followers and the profile picture of the account associated with that github id. 
            <br />
            This involes the use of useParams() hook along with API call to get hold of dynamic content

        </div>
        </div>
        
        </>
    )
}
export default Params