import React from "react"

class Registration extends React.Component{
    render(){
        return(
        <div class="container-fliud mt-5 ">
        <div class="container mr-lg-5 mr-sm-2 mr-xs-2 ">
               <div class="row mr-lg-5 mr-sm-2 mr-xs-2 justify-content-center">
               <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <h1 class="text-center mb-3">Registration</h1>
                <form class="d-block border-right pr-3 mr-md-3 mr-sm-3" width ="100%">
                    <div class="form-group text-center">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group text-center">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" class="btn btn-success mt-3">Submit</button>
                </form>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 border border-success bg-lightgreen rounded mt-5">
                    asdadasdsd
                </div>
            </div>
        </div>

    </div>

        )
    }
}

export default Registration;