<template>
  <section class="top-contact">
    <h1>Contact</h1>
    <section class='contact'>
      <img src="../images/proto_photo.png" class="headshot"/>
      <section class="contact-right">
        <section class="contact-info">
          <img 
            src="../images/Gmail_pur.png"
            class="email"
          />
          <img
            src="../images/Email.png"
            class="email-typed"
          />
        </section>
        <section class="contact-info">
          <img 
            src="../images/Phone_pur.png"
            class="icons phone"
          />
          <img
            src="../images/Phone_Number.png"
            class="phone-number"
          />
        </section>
        <section class="contact-info">
          <img 
            src="../images/Resume_pur.png"
            class="icons"
          />
          <p>Contact For Resume</p>
        </section>
        <a 
          class="contact-info"
          :href="'https://www.linkedin.com/in/michael-walker-719471141/'"
        >
          <img 
            src="../images/LinkedIn_pur.png"
            class="icons"
          />
          <p>Linkedin.com/in/michael-walker-719471141/</p>
        </a>
        <a 
          class="contact-info"
          :href="'https://github.com/MichaelEWalker87'"
        >
          <img 
            src="../images/GitHub_pur.png"
            class="icons"
          />
          <p>Github.com/MichaelEWalker87</p>
        </a>
      </section>
    </section>
  </section>
</template>

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