import React,{useState} from 'react'

const Toggle = () => {
    const[toggle,setToggle]=useState(false)

  return (
    
    <div>
      <h1>Do you Want to get some information</h1>
       {toggle  && <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A reiciendis quaerat eius numquam aperiam iusto commodi totam atque unde iste sapiente dolor animi, ut quia corporis. Velit magnam consequatur ducimus ad enim odio a libero! Excepturi soluta ipsa corporis? Quis ipsam amet soluta facilis ut nemo sit aut, placeat voluptates, quaerat quisquam laboriosam, vero animi ex in velit consequuntur aperiam dolor accusamus! Odit non mollitia eum exercitationem, voluptatum doloremque neque est dicta eveniet, architecto explicabo dignissimos minima ex perspiciatis nulla natus pariatur beatae! Tempore consequuntur ad perferendis ea eum id minima nisi possimus at aliquid saepe aut voluptatem earum dolorum illo animi, quo quos similique nihil in iste, blanditiis asperiores nobis. Beatae, ullam hic facere repellat modi quas debitis quasi nostrum ex adipisci nam labore, illo nisi totam natus perspiciatis. Voluptatem, quae rem voluptates, dignissimos corporis iste facilis culpa itaque alias repudiandae illum nihil soluta sapiente animi possimus quaerat officia est sunt expedita quam quia provident. Voluptatem porro ducimus enim dolorum tempora asperiores nesciunt voluptatum nisi voluptatibus recusandae dolore aut corrupti quibusdam cum quia at consequuntur veritatis magnam, nemo vero molestias ex! Veritatis, nam distinctio. Voluptatem ex dignissimos, eveniet temporibus vel magnam id velit reiciendis deserunt eius minima cupiditate illo amet voluptas dicta nemo sed dolorem consectetur corporis sequi est. Voluptatem repellendus laborum, blanditiis neque nam, commodi, velit vitae sequi sunt beatae illum. Asperiores libero consequatur dolorum iste sed modi qui dolorem. Delectus fugiat eligendi doloremque fuga dignissimos iste? Amet quis ipsum similique nostrum! Neque, nihil eos perferendis ullam aliquid deserunt delectus eaque vitae porro magni dolor! Itaque veniam aperiam pariatur totam recusandae dolorum culpa corrupti, accusamus earum ducimus eius, esse sit inventore in sequi. Labore ab debitis voluptatibus nisi esse ipsa magni commodi dolore velit officiis, reprehenderit voluptatum. Iusto numquam 
        soluta velit ad maxime aut fugiat officia ducimus natus?</p>}
        <button onClick={()=>{setToggle(!toggle)}}>{toggle ? "Hide":"Show"}</button>
    </div>
  )
}

export default Toggle
