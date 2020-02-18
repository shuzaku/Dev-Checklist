<template>
  <div class="pageChecklist">
    <v-card 
        class="mx-auto"
        max-width="344"
        outlined
        v-for = "(question, index ) in questions" :key="question.title"
        v-show = "question.active"
    >
        <v-card-title class="headline centered-text">{{question.title}} </v-card-title>
        <v-card-text> <p>{{question.question}}</p></v-card-text>

        <v-radio-group row v-if="question.inputType == 'radio'" v-model="question.answer" >
            <v-radio label="Yes" value="yes"></v-radio>
            <v-radio label="No" value="no"></v-radio>
            <v-text-field 
                v-if="question.answer === 'no'"
                :messages="['Reason']"
                v-model = "question.reason">
            </v-text-field>
        </v-radio-group>

        <v-text-field 
          v-if="question.inputType === 'text'"
          v-model = 'question.answer' > 
        </v-text-field>

        <v-btn
            :disabled="!completed(index)"
            v-if="question.inputType != 'finish'"
            @click="nextQuestion(index)"
            color="deep-purple darken-1"
            class="ma-2 white--text" 
          >
            <v-icon left dark>mdi-chevron-right</v-icon>
            Next
        </v-btn>

        <v-btn
            v-if="question.inputType == 'finish'"
            @click="finish"
            color="deep-purple darken-1"
            class="ma-2 white--text"  
          >
            <v-icon left dark>mdi-chevron-right</v-icon>
            Finish!
        </v-btn>
    </v-card> 
  </div> 
</template>

<script>
export default {
  name: 'pageChecklist',
  data () {
    return {
      questions: [
        {title: 'Dev', question : 'Developer Name', answer: '', inputType: 'text', active: 'true' },
        {title: 'Client', question : 'Client Name', answer: '', inputType: 'text', active: '' },
        {title: 'URL', question : 'Page URL', answer: '', inputType: 'text', active: '' },
        {title: 'Plugins', question : 'Are plugins updated?', answer: '', inputType: 'radio', reason: '', active: '' },
        {title: 'Meta Title', question : 'Added Meta Title?', answer: '', inputType: 'radio', reason: '', active: '' },
        {title: 'Meta Description', question : 'Added Meta Description?', answer: '', inputType: 'radio', reason: '', active: '' },
        {title: 'Page Category', question : 'Set Page Category?', answer: '', inputType: 'radio', reason: '', active: '' },
        {title: 'Design', question : 'Does the page match the design?', answer: '', inputType: 'radio', reason: '', active: '' },
        {title: 'Content', question : 'Has the content been copied correctly?', answer: '', inputType: 'radio', reason: '', active: '' },
        {title: 'Grammar', question : 'Is the content grammatically correct?', answer: '', inputType: 'radio', reason: '', active: '' },
        {title: 'Animation', question : 'Do images have animations?', answer: '', inputType: 'radio', reason: '', active: '' },
        {title: 'Heading', question : 'Does the heading match the rest of the site?', answer: '', inputType: 'radio', reason: '', active: '' },
        {title: 'Links', question : 'Do all links work?', answer: '', inputType: 'radio', reason: '', active: '' },
        {title: 'Mobile', question : 'Is the page mobile friendly?', answer: '', inputType: 'radio', reason: '', active: '' },
        {title: 'Browser', question : 'Does it look good on other browsers?', answer: '', inputType: 'radio', reason: '', active: '' },
        {title: 'Optimize', question : 'Was tiny png used?', answer: '', inputType: 'radio', reason: '', active: '' },
        {title: 'URL Size', question : 'Is the URL <= 3 words?', answer: '', inputType: 'radio', reason: '', active: '' },
        {title: 'Alt Tags', question : 'Were alt tags added to images?', answer: '', inputType: 'radio', reason: '', active: '' },
        {title: 'Test Email', question : 'Was a test email sent?', answer: '', inputType: 'radio', reason: '', active: '' },
        {title: 'Remove test entry', question : 'Remove test email entry from (gravity forms/ honey)', answer: '', inputType: 'radio', reason: '', active: '' },
        {title: 'GT Metrix', question : 'GTMetrix Score', answer: '', inputType: 'text', reason: '', active: '' },
        {title: 'Compare', question : 'Did you do a side by side website Comparison', answer: '', inputType: 'radio', reason: '', active: '' },
        {title: 'Finish!', question: 'Thanks for your hard work!' , inputType: 'finish'}
      ],
      numberOfCompleted: ''
    }
  }, 
  methods: {
      completed: function(index){
        let question = this.questions[index]
        if(question.inputType == 'radio') {
            if (question.answer == 'yes' ){  
                return true
            } else if (question.answer == 'no' && question.reason){
                return true
            }else {
                return false
            }  
        } else if (question.inputType == 'text'){
            if (question.answer != ''){
                return true
            }  
        }
      },
      nextQuestion: function(index) {
          if ( index <= this.questions.length - 1){
            this.questions[index].active = false
            this.questions[index + 1].active = true
          }
      },
      finish: function() {
        let questions = this.questions
        let newTasks = {}
 
        let taskDate = new Date().toJSON().slice(0,10).replace(/-/g,'/')

        for(let i = 0; i < questions.length; i++){
          if(questions[i].inputType == 'radio' && questions[i].answer == "yes") {
            this.numberOfCompleted += 1
          }
          if (questions[i].inputType == 'text' ) {
           let title = questions[i].title
           newTasks[title] = questions[i].answer
          }
        }

        newTasks.Date = taskDate

        if (this.checklistCompleted) { 
          newTasks.Status = 'Completed'
        } else { 
          newTasks.Status = 'Needs Review'
        }

        console.log(newTasks)
      },
      checklistCompleted: function() {
        let questions = this.questions
        if(this.numberofCompleted < questionsTotal) {
          return false
        } else {
          return true
        }
      }
  },
  computed: {
    questionsTotal: function() {
      let questions = this.questions
      let questionsCount = ''
      if(questions[i].inputType == 'radio') {
        questionsCount += 1
      }
    }
  }
} 
</script>
<style type="text/css">

input { 
    border: 1px solid #fff;
    padding: 16px;
}

.v-input {
  padding: 16px;
}
</style>