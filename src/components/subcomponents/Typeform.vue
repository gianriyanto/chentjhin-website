<template>
  <div :key="componentKey">
    <section id="Typeform" >
      <div class="header-container">
        <span class="header-text">
          Tell me a bit about yourself.
        </span>
      </div>
      <div class="content-wrapper">
        <transition appear name="slide-fade">
          <span class="header-card">
            <span class="prompt"> Let's get started! Your name is </span>
            <inline-input v-bind:inputData="name"/>
          </span>
        </transition>
        <transition appear name="slide-fade">
          <span v-if="name.isValid" class="input-card">
            <span class="prompt"> The program level of interest is </span>
            <inline-input v-bind:inputData="program"/>
          </span>
        </transition>
        <transition appear name="slide-fade">
          <span v-if="program.isValid" class="input-card">
            <span class="prompt"> And you're planning to study </span>
            <inline-input v-bind:inputData="course"/>
          </span>
        </transition>
        <transition appear name="slide-fade">
          <span v-if="course.isValid" class="input-card">
            <span class="prompt"> Cool! Preferably in </span>
            <inline-input v-bind:inputData="location"/>
          </span>
        </transition>
        <transition appear name="slide-fade">
          <span v-if="location.isValid" class="input-card">
            <span class="prompt"> It's best to reach you at </span>
            <inline-input v-bind:inputData="contact"/>
          </span>
        </transition>
        <transition appear name="slide-fade">
          <span v-if="contact.isValid" class="footer-card">
            <span class="label"> {{ footerPrompt }}
              <span class="highlight">{{ name.input.split(' ')[0] }}.</span>
            </span>
            <button @click="sendEmail" :class="buttonStyle" v-scroll-to="{ el: '#Landing', easing: [.2, .80, .30, 1],duration: 1500}">
              <span class="button-label"> {{ buttonLabel }} </span>
            </button>
          </span>
        </transition>
      </div>
    </section>
  </div>
</template>

<script>
import InlineInput from "@/components/subcomponents/InlineInput";
import emailjs from 'emailjs-com';

export default {
  name: "Typeform",
  components: {
    InlineInput
  },
  data() {
    return {
      componentKey: 0,
      name: {prompt: 'You full name?', input: 'You full name?', edit: false, isValid: false},
      program: {prompt: 'Pre-uni Pathway, Undergrad, or Postgrad?', input: 'Pre-uni Pathway, Undergrad, or Postgrad?', edit: false, isValid: false},
      course: {prompt: 'What major or course?', input: 'What major or course?', edit: false, isValid: false},
      location: {prompt: 'What city or country?', input: 'What city or country?', edit: false, isValid: false},
      contact: {prompt: 'Your mobile number or email', input: 'Your mobile number or email', edit: false, isValid: false},
      footerPrompt: 'Thanks',
      buttonLabel: 'Submit',
      buttonStyle: 'submit-button'
    }
  },
  methods: {
    sendEmail() {
      if (this.buttonLabel === 'Submit') {
        // If typeform has not been submitted
        emailjs.send(
            "service_gpg6kap",
            "template_oev55pg",
            {
              name: this.name.input,
              program: this.program.input,
              course: this.course.input,
              location: this.location.input,
              contact: this.contact.input
            }
        );
        this.footerPrompt = 'Got it. Chat soon';
        this.buttonLabel = 'Clear';
        this.buttonStyle = 'clear-button';
      } else {
        console.log('Clear Typeform');
        this.componentKey += 1;
        this.name = {prompt: 'You full name?', input: 'Your full name?', edit: false, isValid: false};
        this.program = {prompt: 'Pre-uni Pathway, Undergrad, or Postgrad?', input: 'Pre-uni Pathway, Undergrad, or Postgrad?', edit: false, isValid: false};
        this.course = {prompt: 'What major or course?', input: 'What major or course?', edit: false, isValid: false};
        this.location = {prompt: 'What city or country?', input: 'What city or country?', edit: false, isValid: false};
        this.contact = {prompt: 'Your mobile number or email', input: 'Your mobile number or email', edit: false, isValid: false};
        this.footerPrompt = 'Thanks';
        this.buttonLabel = 'Submit';
        this.buttonStyle = 'submit-button';
      }
    }
  }
}
</script>

<style scoped lang="scss">

@media only screen and (min-width: 769px) {
  #Typeform {
    position: relative;
    display: flex;
    flex-direction: column;
    margin: auto 0;
    z-index: 2;

    .header-container{
      display: none;
    }

    .content-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: auto;
      text-align: left;
      height: fit-content;
      width: 350px;

      .header-card {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        margin-bottom: 13px;
        padding: 15px 27px 10px 27px;
        height: 55px;
        border-radius: 15px 15px 5px 5px;
        background: rgba(255, 255, 255, 0.1);
        box-shadow: 0 8px 22px 0 rgba(31, 38, 135, 0.1);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.7);

        .prompt {
          font-family: "Bw Modelica Medium", serif;
          letter-spacing: -0.5px;
          color: #1f1f1f;
          font-size: 15px;
          margin: 0 9px 5px 0;
        }
      }

      .input-card {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        margin-bottom: 13px;
        padding: 10px 27px;
        height: 50px;
        border-radius: 5px;
        background: rgba(255, 255, 255, 0.1);
        box-shadow: 0 8px 22px 0 rgba(31, 38, 135, 0.1);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.7);

        .prompt {
          font-family: "Bw Modelica Medium", serif;
          letter-spacing: -0.5px;
          color: #1f1f1f;
          font-size: 15px;
          margin: 0 9px 5px 0;
        }
      }

      .footer-card {
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 13px;
        padding: 2px 17px 2px 27px;
        height: 50px;
        border-radius: 5px 5px 15px 15px;
        background: rgba(255, 255, 255, 0.1);
        box-shadow: 0 8px 22px 0 rgba(31, 38, 135, 0.1);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.7);

        .label {
          line-height: 1.3;
          margin: auto 0;
          font-family: "Bw Modelica Medium", serif;
          letter-spacing: -0.5px;
          color: #1f1f1f;
          font-size: 17px;
          width: 60%;

          .highlight {
            font-family: "Gilroy Bold", serif;
            color: #5651ec;
          }
        }

        .submit-button {
          cursor: pointer;
          margin: auto 0;
          width: 30%;
          height: 34px;
          border: thin solid #5b1fff;
          background: rgba(255, 255, 255, 0.07);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.2);
          border-radius: 7px;
          outline: none;
          text-decoration: none;
          transition: all 0.3s ease-in-out;
          color: #5b1fff;

          .button-label {
            font-family: "Gilroy SemiBold", serif;
            font-size: 13px;
            margin: auto;
          }

          &:hover {
            opacity: 0.9;
          }
        }

        .clear-button {
          cursor: pointer;
          margin: auto 0;
          width: 30%;
          height: 34px;
          border: thin solid black;
          background: rgba(255, 255, 255, 0.1);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.3);
          border-radius: 7px;
          outline: none;
          text-decoration: none;
          transition: all 0.25s ease-in-out;
          color: black;

          .button-label {
            font-family: "Gilroy SemiBold", serif;
            font-size: 13px;
            margin: auto;
          }

          &:hover {
            opacity: 0.6;
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 768px){

  #Typeform {
    position: relative;
    display: flex;
    flex-direction: column;
    margin: auto 0;
    z-index: 2;

    .header-container{
      display: flex;
      flex-direction: column;
      align-self: center;
      margin: 0 auto 20px auto;
      width: 90%;

      .header-text{
        font-family: "Gilroy Bold", serif;
        color: #5b1fff;
        font-size: 21px;
        letter-spacing: -0.5px;
      }
    }

    .content-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: auto;
      text-align: left;
      height: fit-content;
      width: 90%;

      .header-card {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        margin-bottom: 13px;
        padding: 20px 27px 15px 27px;
        height: 55px;
        border-radius: 15px 15px 5px 5px;
        background: rgba(255, 255, 255, 0.1);
        box-shadow: 0 8px 22px 0 rgba(31, 38, 135, 0.1);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        border: 1px solid #9894fc;

        .prompt {
          font-family: "Bw Modelica Medium", serif;
          letter-spacing: -0.5px;
          color: #1f1f1f;
          font-size: 15px;
          margin: 0 9px 5px 0;
        }
      }

      .input-card {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        margin-bottom: 13px;
        padding: 20px 27px;
        height: 50px;
        border-radius: 5px;
        background: rgba(255, 255, 255, 0.1);
        box-shadow: 0 8px 22px 0 rgba(31, 38, 135, 0.1);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        border: 1px solid #9894fc;

        .prompt {
          font-family: "Bw Modelica Medium", serif;
          letter-spacing: -0.5px;
          color: #1f1f1f;
          font-size: 15px;
          margin: 0 9px 5px 0;
        }
      }

      .footer-card {
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 13px;
        padding: 10px 17px 13px 27px;
        height: 50px;
        border-radius: 5px 5px 15px 15px;
        background: rgba(255, 255, 255, 0.1);
        box-shadow: 0 8px 22px 0 rgba(31, 38, 135, 0.1);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        border: 1px solid #9894fc;

        .label {
          line-height: 1.3;
          margin: auto 0;
          font-family: "Bw Modelica Medium", serif;
          letter-spacing: -0.5px;
          color: #1f1f1f;
          font-size: 17px;
          width: 60%;

          .highlight {
            font-family: "Gilroy Bold", serif;
            color: #5651ec;
          }
        }

        .submit-button {
          cursor: pointer;
          margin: auto 0;
          width: 40%;
          height: 40px;
          border: thin solid #5b1fff;
          background: rgba(255, 255, 255, 0.07);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.2);
          border-radius: 7px;
          outline: none;
          text-decoration: none;
          color: #5b1fff;

          .button-label {
            font-family: "Gilroy SemiBold", serif;
            font-size: 13px;
            margin: auto;
          }
        }

        .clear-button {
          cursor: pointer;
          margin: auto 0;
          width: 30%;
          height: 34px;
          border: thin solid black;
          background: rgba(255, 255, 255, 0.1);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.3);
          border-radius: 7px;
          outline: none;
          text-decoration: none;
          color: black;

          .button-label {
            font-family: "Gilroy SemiBold", serif;
            font-size: 13px;
            margin: auto;
          }
        }
      }
    }
  }
}

.slide-fade-enter-active {
  transition: all 1s ease-in-out;
}
.slide-fade-leave-active {
  transition: all 1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to{
  transform: translateY(400px) scale(0.7);
  opacity: 0;
}

</style>