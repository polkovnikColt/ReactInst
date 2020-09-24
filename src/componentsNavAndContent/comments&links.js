import React from "react"

class Comments_Links extends React.Component {
    constructor(props){
        super(props);
        
    }
    render() {
        var textArea;
        if(this.props.logged === 'LOG'){
           textArea =  <textarea class="form-control"   did="exampleFormControlTextarea1" rows="5" ></textarea>
        }
        else{
            textArea = <textarea class="form-control"  disabled did="exampleFormControlTextarea1" rows="5" ></textarea>
        }
        return (
<div><div class="container-fluid mt-5">
            <div class="container">
                <div class="col-12 text-center">
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1" class="font-small-title" >Leave a comment</label>
                        <div class="w-100"></div>
                        <label for="exampleFormControlTextarea1" class="font-small" >[only autorized user can leave comment]</label>
            {textArea}
                    </div>
                </div>
            </div>
        </div>
        
        <div class="container my-5 ">
            <div class="row bg-dark">
              <div class="col-3"></div>
               <div class="col-6 text-center justify-content-center ">
                   <a href=""><img src="https://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19753.png" alt="" class="rounded mx-3 logo" height="76" width="76"/></a>
                   <a href=""> <img src="https://pluspng.com/img-png/instagram-png-instagram-png-logo-1455.png" alt="" class="rounded mx-3 logo" height="50" width="50" /></a>
                   <a href=""><img src=" https://upload.wikimedia.org/wikipedia/commons/5/5c/Telegram_Messenger.png" alt="" class="rounded mx-3 logo" height="57" width="57" /></a>
              </div>
              <div class="col-3"></div>
            </div>
        </div>

        <div class="modal fade " id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog " role="document">
                <div class="modal-content bg-secondary">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <img src="https://c7.hotpng.com/preview/800/959/694/vegvisir-ornament-viking-odin-runes-thor.jpg" alt="" class="w-100" />
                    </div>
                </div>
            </div>
        </div>
    </div>
        );
    }
}

export default Comments_Links;