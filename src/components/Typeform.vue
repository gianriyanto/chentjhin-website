<template>
  <div>
    <section id="Typeform">
      <div class="wrapper">
        <span class="header">
          Hi there!
        </span>

        <transition appear name="slide-fade">
          <span class="input-card">
            <a class="prompt"> Hi there! Your name is </a>
            <inline-input v-bind:inputData="name"/>
          </span>
        </transition>

        <transition appear name="slide-fade">
          <span v-if="name.isValid" class="input-card">
            <a class="prompt"> And you're planning to study </a>
            <inline-input v-bind:inputData="course"/>
          </span>
        </transition>

        <transition appear name="slide-fade">
          <span v-if="course.isValid" class="input-card">
            <a class="prompt"> Cool! Preferably in </a>
            <inline-input v-bind:inputData="country"/>
          </span>
        </transition>

        <transition appear name="slide-fade">
          <span v-if="country.isValid" class="input-card">
            <a class="prompt"> It's best to reach you at </a>
            <inline-input v-bind:inputData="contact"/>
          </span>
        </transition>

        <transition appear name="slide-fade">
          <span v-if="contact.isValid" class="footer-card">
            <a class="label"> Fantastic! Chat soon.</a>
            <button class="email-button">
              <a class="button-label"> Done </a>
            </button>
          </span>
        </transition>
      </div>
    </section>
  </div>
</template>

<script>
import InlineInput from "@/components/InlineInput";

export default {
  name: "Typeform",
  components: {
    InlineInput
  },
  data() {
    return {
      name: {prompt: 'your full name?', input: 'your full name?', edit: false, isValid: false},
      course: {prompt: 'what course?', input: 'what course?', edit: false, isValid: false},
      country: {prompt: 'country?', input: 'country?', edit: false, isValid: false},
      contact: {prompt: 'your email or mobile', input: 'your email or mobile', edit: false, isValid: false},
    }
  }
}
</script>

<style scoped lang="scss">

#Typeform{
  position: relative;
  display: flex;
  flex-direction: column;
  margin: auto 0;

  .wrapper{
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
    text-align: left;
    height: fit-content;
    width: 366px;

    .header{
      display: none;
      font-family: "Gilroy Bold", serif;
      color: #1c1c1c;
      font-size: 30px;
      margin: 0 9px 10px 10px;
    }

    .input-card{
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      margin-bottom: 13px;
      padding: 18px 27px;
      height: 55px;
      background: rgba(215, 202, 202, 0);
      box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.2 );
      backdrop-filter: blur( 1.5px );
      -webkit-backdrop-filter: blur( 1.5px );
      border-radius: 12px;

      .prompt {
        font-family: "Gilroy SemiBold", serif;
        color: #1c1c1c;
        font-size: 17px;
        margin: 0 9px 5px 0;
      }
    }
    .footer-card{
      position: relative;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-bottom: 13px;
      padding: 0 8px 0 20px;
      height: 58px;
      background: rgba(207, 201, 201, 0.0);
      box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.2 );
      backdrop-filter: blur( 10px );
      -webkit-backdrop-filter: blur( 10px );
      border-radius: 12px;

      .label{
        margin: auto 0;
        font-family: "Gilroy Bold", serif;
        color: #1c1c1c;
        font-size: 18px;
      }
      .email-button{
        cursor: pointer;
        margin: auto 0;
        width: 120px;
        height: 38px;
        border: none;
        background-color: #282828;
        box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.6 );
        border-radius: 10px;
        outline: none;
        text-decoration: none;
        transition: all 0.3s ease-in-out;

        .button-label{
          font-family: "Gilroy SemiBold", serif;
          font-weight: 600;
          font-size: 13px;
          margin: auto;
          color: white;
        }

        &:hover{
          opacity: 0.9;
        }
      }
    }
  }
}

/* slide fade transition */
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all 1s ease-out;
}
.slide-fade-leave-active {
  transition: all 1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(150px);
  opacity: 0;
}

</style>