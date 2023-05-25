<template>
  <form class="form-about" @submit.prevent="postData">
    <div class="form-about__wrapper-data">
      <div class="form-about__wrapper-inputs">
        <div class="subtitle">Персональные данные</div>
        <MainInput parent="true"/>
      </div>

      <div class="form-about__children-block">
        <div>
          <div class="subtitle" v-if="children">Дети (макс. 5)</div>
          <div class="form-about__button-add-person" @click="addInputsChild" v-if="buttonDelete !== 5">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M2.13332 7.85555C1.50125 7.85555 0.988866 8.36794 0.988867 9C0.988867 9.63206 1.50126 10.1445 2.13332 10.1445L7.85544 10.1445L7.85545 15.8668C7.85545 16.4989 8.36784 17.0113 8.9999 17.0113C9.63196 17.0113 10.1444 16.4989 10.1444 15.8668L10.1443 10.1445L15.8667 10.1445C16.4988 10.1445 17.0112 9.63207 17.0112 9.00001C17.0112 8.36795 16.4988 7.85556 15.8667 7.85556L10.1443 7.85556L10.1443 2.13338C10.1443 1.50132 9.63195 0.988927 8.99989 0.988927C8.36783 0.988927 7.85544 1.50131 7.85544 2.13338L7.85544 7.85555L2.13332 7.85555Z" fill="#01A7FD"/>
            </svg>
            <div class="edit-text">Добавить ребенка</div>
          </div>
        </div>
        <div class="form-about__wrapper-inputs" @click="listenDelete">
          <MainInput v-for="n in children" :key="n"/>
        </div>
      </div>
    </div>
      <button type="submit" class="form-about__button-submit" v-if="children">Сохранить</button>
    </form>
</template>

<script>
  import MainInput from '../../components/input/input.vue';
  
  export default {
    name: 'FormPage',
    data () {
      return{
        children: 0,
        buttonDelete: 0
      }
    },
    components: {
      MainInput
    },
    methods: {
      addInputsChild () {
        this.children += 1
        setInterval(() => {
          const deleteButton = document.querySelectorAll('.button-delete');
          this.buttonDelete = deleteButton.length;
        }, 100)
      },
      listenDelete (evt){
        const target = evt.target;

        if(target.classList.contains('button-delete')){
          const deleteButton = document.querySelectorAll('.button-delete');
          this.buttonDelete = deleteButton.length;
          if(this.buttonDelete === 0){
            this.children = 0;
          }
        }
      },
      postData (evt){
        const target = evt.target;
        const inputsForm = target.querySelectorAll('.form-about__one-person');
        const formData = [];
        const parentArray = [];
        const childrenArray = [];

        inputsForm.forEach(item => {
          const inputs = item.querySelectorAll('input');

          const onePerson = {
            status: item.dataset.status,
            name: inputs[0].value,
            age: inputs[1].value,
          }

          if(item.dataset.status === 'parent'){
            parentArray.push(onePerson);
          } else {
            childrenArray.push(onePerson);
          }
        });
        formData.push(parentArray, childrenArray);
        this.$store.dispatch('setFormData', formData);
        this.$router.push('preview');
      }
    },
    computed: {
      amountChildren (){
        return this.$store.getters.getAmountChildren;
      }
    }
  }
</script>

<style lang="scss">
  .form-about {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  .form-about__wrapper-data{
    display: flex;
    flex-direction: column;
    gap: 44px;
  }
  .form-about__wrapper-inputs {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .form-about__children-block{
    display: flex;
    flex-direction: column;
    gap: 10px;

    >div:first-child{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      height: 44px;
    }
  }

  .form-about__button-add-person {
    display: flex;
    flex-direction: row;
    gap: 8px;
    justify-content: center;
    width: 204px;
    height: 44px;
    border: 2px solid #01A7FD;
    border-radius: 100px;
    cursor: pointer;
    margin-left: auto;
    margin-right: 0;

    svg{
      width: 12px;
      height: 12px;
    }
    svg, div{
      margin: auto 0;
    }

    &:hover{
      background-color: #01A7FD;

      path{
        fill: #fff
      }
      div{
        color: #fff;
      }
    }
  }

  .form-about__button-submit {
    width: 118px;
    height: 44px;
    background: #01A7FD;
    border-radius: 100px;
    color: #fff;
    border: none;
    cursor: pointer;
    border: 2px solid #fff;

    &:hover{
      border: 2px solid #01A7FD;
      background-color: #fff;
      color: #01A7FD;
    }
  }

</style>