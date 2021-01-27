<template>
  <section id="nav">
    <img alt="Site Logo" src="../images/MW_Logo_OG.png" class='logo'/>
    <img alt="Name" src="../images/Name_color.png" class='name'/>
    <router-link to="/">
      <img v-if="selectedLink !== 'Home'"
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
  }
</style>