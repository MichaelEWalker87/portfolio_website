<template>
  <section class="top-contact">
    <h1>Contact</h1>
    <section class='contact'>
      <vue-load-image>
        <img src="../images/proto_photo.png" 
          class="headshot" 
          alt="Headshot Photo"
          slot="image" 
        />
        <div slot="error">Headshot Image failed to load</div>
        <LoadIcon slot="preloader" src="../images/Gmail_pur.png"/>
      </vue-load-image>
      <section class="contact-right">
        <section class="contact-info">
          <vue-load-image>
            <img 
              src="../images/Gmail_pur.png"
              class="email"
              alt="Email Icon"
              slot="image" 
            />
            <LoadIcon slot="preloader" src="../images/Gmail_pur.png"/>
          </vue-load-image>
          <vue-load-image>
            <img
              src="../images/Email.png"
              class="email-typed"
              alt="Michael.E.Walker.87@gmail.com"
              slot="image" 
            />            
            <LoadIcon slot="preloader" src="../images/Gmail_pur.png"/>
          </vue-load-image>
        </section>
        <section class="contact-info">
          <vue-load-image>
            <img 
              src="../images/Phone_pur.png"
              class="icons phone"
              alt="Phone Icon"
              slot="image" 
            />
            <LoadIcon slot="preloader" src="../images/Gmail_pur.png"/>
          </vue-load-image>
          <vue-load-image>
            <img
              src="../images/Phone_Number.png"
              class="phone-number"
              alt="Phone Number 520-907-6955"
              slot="image" 
            />
            <LoadIcon slot="preloader" src="../images/Gmail_pur.png"/>
          </vue-load-image> 
        </section>
        <section class="contact-info">
          <vue-load-image>
            <img 
              src="../images/Resume_pur.png"
              class="icons"
              alt="Resume Icon"
              slot="image" 
            />
            <LoadIcon slot="preloader" src="../images/Gmail_pur.png"/>
          </vue-load-image> 
          <p>Contact For Resume</p>
        </section>
        <a 
          class="contact-info"
          target="_blank"
          alt="Linked Icon"
          rel="noopener noreferrer"
          :href="'https://www.linkedin.com/in/michael-walker-719471141/'"
        >
          <img 
            src="../images/LinkedIn_pur.png"
            class="icons"
            alt="LinkedIn Icon Image"
          />
          <p>Linkedin.com/in/michael-walker-719471141/</p>
        </a>
        <a 
          class="contact-info"
          target="_blank"
          alt="Github Icon"
          rel="noopener noreferrer"
          :href="'https://github.com/MichaelEWalker87'"
        >
          <img 
            src="../images/GitHub_pur.png"
            class="icons"
            alt="Github Icon Image"
          />
          <p>Github.com/MichaelEWalker87</p>
        </a>
      </section>
    </section>
  </section>
</template>

<script>
import VueLoadImage from 'vue-load-image'
import LoadIcon from './LoadIcon'

  export default {
    name: 'Contact',
    components: {
      'vue-load-image': VueLoadImage,
      LoadIcon,
    }
  }
</script>

<style lang="scss" scoped>
@import '../styles/_variables.scss';
@import'../styles/_mixins.scss';

.headshot{
  width: 20em;
  margin-left: 2em;
  margin-bottom: 1em;
  @media screen  and (max-width: 600px){
    width: 15em;
  }
}

.contact{
  display: grid;
  grid-template-columns: 1fr 2fr;
  @media screen  and (max-width: 900px){
    display: inline;
    place-items: center;
  }
}

.top-contact{
    @media screen  and (max-width: 900px){
    text-align: center;
  }
}

.contact-right{
  display: flex;
  flex-flow: column;
  place-content: space-between;
  @media screen  and (max-width: 900px){
    place-items: center;
    margin-left: 1em;
    display: inline-block;
  }
}
p{
  padding-left: 1em;
  font-size: 1.7em;
  @include p-contact();
  @media screen  and (max-width: 700px){
    font-size: 1.2em;
  }
  @media screen  and (max-width: 600px){
    font-size: 1em;
  }
}

.email{
  // width: 2.2em;
  width: 3em;
  padding-left: .5em;
  @media screen  and (max-width: 700px){
    width: 2.2em;
    padding-left: 1em;
  }
}

.icons{
  width: 3em;
  padding-left: .5em;
  @media screen  and (max-width: 700px){
    width: 2.2em;
    padding-left: 1em;
  }
}

.phone{
  width: 3.5em;
  padding-left: 0.2em;
  @media screen  and (max-width: 700px){
    width: 2.8em;
    padding-left: 0.6em;
  }
}

.contact-info{
  display: flex;
  text-decoration: none;
  text-align: left;
  align-items: center;
}

.email-typed{
  width: 25em;
  padding-left: 1em;
  @media screen  and (max-width: 700px){
    width: 19em;
  }
  @media screen  and (max-width: 600px){
    width: 16em;
  }
  @media screen  and (max-width: 390px){
    font: -webkit-control
  }
}
.phone-number{
  width: 12em;
  padding-left: 1em;
  @media screen  and (max-width: 700px){
    width: 9em;
  }
  @media screen  and (max-width: 600px){
    width: 7.5em;
  }
}

h1{
  @include title-text();
}

a{
  &:hover{
    @include hover();
    font-size: 110%;
  }
}
</style>