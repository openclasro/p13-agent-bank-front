

const EditForm = () => {
    return (
        <>   <div className="">
            <div className="accountHeader">
                <h1 className="">Welcome back</h1>



                <form className='userForm'>
                    <div className="inputWrapper">
                        <label htmlFor="firstName"></label>
                        <input type="text" id="firstName" name='firstName' placeholder="" required />
                        <label htmlFor="lastName"></label>
                        <input type="text" id="lastName" name="lastName" placeholder="" required />
                    </div>

                    <div className="userButtons">
                        <button className="btn" type="submit" >Save</button>
                        <button className="btn" type="submit" >Cancel</button>
                    </div>
                </form>




            </div>
        </div></>
    )

}

export default EditForm;