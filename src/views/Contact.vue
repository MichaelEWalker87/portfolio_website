<template>
  <section>
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
          <p>
            Contact for My Resume
          </p>
        </section>
        <a 
          class="contact-info"
          href="www.Linkedin.com/in/michael-walker-719471141/"
        >
          <img 
            src="../images/LinkedIn_pur.png"
            class="icons"
          />
          <p>
            Linkedin.com/in/michael-walker-719471141/
          </p>
        </a>
        <a 
          class="contact-info"
          href="www.Github.com/MichaelEWalker87"
        >
          <img 
            src="../images/GitHub_pur.png"
            class="icons"
          />
          <p>
            Github.com/MichaelEWalker87
          </p>
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
}

.contact{
  display: grid;
  grid-template-columns: 1fr 2fr;
}
.contact-right{
  display: flex;
  flex-flow: column;
  place-content: space-between;
}
p{
  padding-left: 1em;
  @include p-contact();
}

.email{
  width: 2.2em;
  padding-left: 1em;
}

.icons{
  width: 3em;
  padding-left: .5em;
}

.phone{
  width: 3.5em;
  padding-left: 0.2em;
}

.contact-info{
  display: flex;
  text-decoration: none;
}

.email-typed{
  width: 25em;
  padding-left: 1em;

}
.phone-number{
  width: 12em;
  padding-left: 1em;
}

h1{
  @include title-text();
}
</style>