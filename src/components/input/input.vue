<template>
    <div :class="[parent ? 'form-about__one-person form-about__one-person_vertically parent' : 'form-about__one-person']" :data-status="[parent ? 'parent' : 'child']">
        <div>
            <input :name="[parent ? 'name_parent' : 'name_child']" type="text" required>
            <div class="placeholder">Имя</div>
        </div>
        <div>
            <input :name="[parent ? 'age_parent' : 'age_child']" type="number" required>
            <div class="placeholder">Возраст</div>
        </div>
        <div v-if="!parent" class="edit-text button-delete" @click="deleteBlock">Удалить</div>
    </div>
</template>

<script>
  export default {
    name: 'MainInput',
    props: ['parent'],
    methods: {
      deleteBlock (evt){
        const parentElement = evt.target.closest('.form-about__one-person');
        parentElement.remove();
      }
    }
  }
</script>

<style lang="scss">
  .form-about__one-person {
    display: flex;
    flex-direction: row;
    gap: 18px;

    >div{
      position: relative;

      &:not(:last-child){
        width: 100%;
      }
    }
    input{
      box-sizing: border-box;
      width: calc(100% - 16px);
      height: 56px;
      padding-top: 20px;
      padding-left: 16px;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      color: #111111;
      background: #FFFFFF;
      border: 1px solid #F1F1F1;
      border-radius: 4px;
      outline: none;

      &:focus ~ .placeholder,
      &:valid ~ .placeholder {
        top: 28%;
      }
    }
  }

  .form-about__one-person_vertically{
    flex-direction: column;
    gap: 10px;
  }
</style>