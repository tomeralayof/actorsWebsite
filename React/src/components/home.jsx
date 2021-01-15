import React, { Component } from 'react';
import PageHeader from "../common/pageHeader";
import userService from "../services/userService";
import {Redirect} from "react-router-dom";

class Home extends Component {
  state = {  }
  render() { 
    if(userService.getToken()) return <Redirect to ="/actores/profiles" />

    return ( 
      <div className="container ml-auto mt-4">
        <PageHeader Header="Audition app" />
       <div className="row mt-3">
         <div className="col-12">
            <p className="ml-3 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime in autem amet exercitationem similique eligendi voluptate, facere illo delectus harum optio eius! Consequuntur eligendi quibusdam corrupti nobis laborum eaque dolorum atque architecto ullam sapiente. Rerum molestiae dolore distinctio aspernatur, dolores quisquam accusantium, quae provident dolorum quidem illum voluptates quia neque dignissimos cumque rem placeat doloremque molestias sit. Impedit est labore quam non velit porro quas illo blanditiis voluptatum voluptatibus, aspernatur nemo nesciunt ut sit libero adipisci excepturi ipsum dicta quisquam quos aperiam corporis consequuntur vitae. Harum repellat ratione quaerat veniam, quo, a earum accusamus ea ipsum amet tempora voluptas beatae, ad maxime inventore maiores nisi rem doloremque soluta velit. Odit laborum assumenda magni optio distinctio libero neque maiores suscipit corrupti cumque laboriosam, vel natus vitae, ad omnis dicta iste? Eveniet ea eum saepe eos aut tempora dolor expedita alias vitae aspernatur in necessitatibus possimus, eius repudiandae totam tempore perferendis, corporis deleniti provident architecto quam temporibus adipisci? Accusamus nobis dolor sapiente beatae, itaque, neque perspiciatis nostrum dolore totam, minus quibusdam at repellat eum! Dolor nisi id fugit iste repellendus nihil rem dolore soluta beatae laborum deserunt adipisci culpa reiciendis, eius quia repudiandae perspiciatis dolorem cumque quo quaerat ad. Officia officiis error reprehenderit adipisci recusandae consectetur dolorum fugiat praesentium, esse ut ratione sunt dicta eaque aspernatur temporibus labore necessitatibus nihil fuga iste asperiores qui blanditiis cumque rem. Quo facere similique accusamus quod tempore, quia magni facilis mollitia porro eius expedita at magnam fuga. Impedit dolores, explicabo labore deserunt numquam similique obcaecati placeat?</p>
           </div>
           </div>        
      </div>
     );
  }
}
 
export default Home;