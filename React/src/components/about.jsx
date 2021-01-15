import React, { Component } from 'react';
import PageHeader from "../common/pageHeader";
import userService from "../services/userService";
import {Redirect} from "react-router-dom";

class About extends Component {
  state = {  }
  // x = console.log(userService.getToken())
  render() { 
    if(userService.getToken()) return <Redirect to ="/actores/profiles" />

    return ( 
      
      <div className="container ml-auto mt-4">
        <PageHeader Header="Our Mission" />
       <div className="row mt-3">
         <div className="col-12">
           {this.x};
            <p className="ml-3 text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores commodi doloribus fugiat incidunt repudiandae minima similique facilis, mollitia unde necessitatibus. Ipsum in dolore deserunt consequatur quaerat accusantium. Similique id consequuntur commodi eligendi corporis. A doloribus possimus ut nulla nemo consequuntur magnam quidem? Unde repudiandae error aliquid provident ipsam obcaecati placeat numquam nam odit facilis quia officiis fuga dolorum consectetur velit consequatur exercitationem, est itaque ab ex dignissimos vitae cumque veniam. Quisquam nulla accusamus ipsum nihil ullam animi asperiores! Enim ratione repellendus doloribus tenetur provident deleniti fugiat voluptatibus voluptas assumenda cupiditate tempore dolore voluptate, est reprehenderit ex nostrum maxime repellat dolor modi ipsam amet numquam? Saepe quas accusantium rerum enim cupiditate temporibus aliquam soluta, omnis assumenda iusto reiciendis fugiat voluptas molestiae. Placeat pariatur alias suscipit dolores sed illo repudiandae mollitia quia, soluta laborum harum, maiores officia ut distinctio. Quis exercitationem, dolores magnam explicabo quasi assumenda esse est eius quam ad, corporis magni quia suscipit. Perspiciatis dolore cupiditate asperiores hic rerum aliquid, ut laborum fugit eligendi corporis ipsum reprehenderit saepe! Vero illum sapiente dolore veniam assumenda nulla quos maiores error unde deserunt fugiat consequatur exercitationem ea temporibus, laboriosam veritatis necessitatibus? Animi amet vero officia atque iusto neque nemo ad eaque praesentium sit eius sunt alias sequi enim, dignissimos accusantium corrupti cum quidem voluptate ducimus qui. Blanditiis cum ad, suscipit corporis ducimus quas magnam voluptatem fuga repudiandae totam quidem. Omnis ipsum nostrum, soluta iusto rerum, consectetur necessitatibus perferendis, sint aperiam laboriosam quos doloribus aspernatur repellendus alias unde esse nesciunt ab. Beatae, temporibus praesentium?</p>
           </div>
           </div>        
      </div>

       
     );
  }
}
 
export default About;