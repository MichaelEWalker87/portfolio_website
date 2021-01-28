<template>
  <section id="nav">
    <img alt="Site Logo" src="../images/MW_Logo_OG.png" class='logo'/>
    <img alt="Name" src="../images/Name_color.png" class='name'/>
    <div @click= "setActiveLink('Home')" class="icon-div">
    <router-link to="/">
      <img v-if="selectedLink !== 'Home' "
        @click= "setActiveLink('Home')"
        alt="Projects" 
        src="../images/Home_color.png" 
        class='nav-button home'
      />
      <img v-else
        alt="Home" 
        src="../images/Home_Red.png" 
        class='nav-button home'
      />
    </router-link> 
    </div>
    <div @click= "setActiveLink('Project')" class="icon-div">
      <router-link to="/Project">
        <img v-if="selectedLink !== 'Project'"
          @click= "setActiveLink('Project')"
          alt="Projects" 
          src="../images/NoteBook_color.png" 
          class='nav-button'
        />
        <img v-else
          alt="Projects" 
          src="../images/NoteBook_Red.png" 
          class='nav-button'
        />
      </router-link>
    </div>
    <div @click= "setActiveLink('WorkHistory')" class="icon-div">
      <router-link to="/WorkHistory">
        <img v-if="selectedLink !== 'WorkHistory'"
          @click= "setActiveLink('WorkHistory')"
          alt="Work History" 
          src="../images/Coffee_color.png" 
          class='nav-button'
        />
        <img v-else  
          alt="Work History" 
          src="../images/Coffee_Red.png" 
          class='nav-button'
        />
      </router-link>
    </div>
    <div @click= "setActiveLink('Contact')" class="icon-div">
      <router-link to="/Contact">
        <img v-if="selectedLink !== 'Contact'" 
          @click= "setActiveLink('Contact')"
          alt="Contact" 
          src="../images/PenPad_color.png" 
          class='nav-button'
        />
        <img v-else 
          alt="Contact" 
          src="../images/PenPad_Red.png" 
          class='nav-button'
        />
      </router-link>
    </div>
  </section>
</template>

<script>

export default {
data(){
  return{
    selectedLink: "Home"
  }
},

methods:{
  setActiveLink(name){
    this.selectedLink = name;
  }
}  

}
</script>

<style lang="scss" scoped>
  @import '../styles/_variables.scss';
  @import '../styles/_mixins.scss';

  #nav {
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 3fr 1fr 1fr 1fr 1fr;
    background-color: $background-blue;
    padding: 0.5em 0em 0.5em 0em;
    text-align: center;

    .nav-button{
      width: 4.5em;
      margin-top: 1em;
    }
    .name{
      width: 33em;
      height: 7em;
      margin-left: -1em;
    }
    .home{
      width: 5.5em;
    }

    .logo{
      width: 3em;
      justify-items: center;
      background-color: $background-paper;
      border-radius: 100%;
      padding: 0.75em 1.2em;
      margin-left: 1em;
    }

    .icon-div{
      &:hover{
        background-color: darken($color: $background-blue, $amount: 10%);
        border-radius: 1em;
      }
    }
    @media screen  and (max-width: 940px){
      
      .name{
        width: 24em;
        height: 7em;
      }
      .logo{
        justify-self: center;
        width: 2.5em;
        padding: 0.75em 1.1em;
      }
      .nav-button{
        margin-top: 0.5em;
        width: 4em;
      }
      
      .home{
        width: 5em;
      }
    }
    @media screen  and (max-width: 800px){
      
      .name{
        width: 20em;
        height: 6em;
        padding-left: 0.2em;
      }
      .logo{
        justify-self: center;
        width: 2.2em;
        padding: 0.7em 1.0em;
      }
      .nav-button{
        margin-top: 0.5em;
        width: 3.5em;
      }
      
      .home{
        width: 4.5em;
      }
    }
    @media screen  and (max-width: 650px){
      grid-template-columns: 1fr 1fr 1fr 1fr;
      
      .icon-div {
        grid-row-start: 2;
        margin-top: -0.3em;
      }

      .name{
        grid-column-end: span 3;
        width: 20em;
        height: 4em;
        margin-top: -0.7em;
      }
      .logo{
        justify-self: center;
        width: 2em;
        padding: 0.6em 0.9em;
      }
      .nav-button{
        margin-top: 0.5em;
        width: 3.5em;
      }
      
      .home{
        width: 4.5em;
      }
    }
  }
</style>