const eventAdd = Vue.component('event-add' , {
    template:   `<form action="" method="POST" id="evForm">
                    <h2 class="md_margin_b">{{ eventTitle }}</h2>
                    <label for="title">Название:</label>
                    <input type="text" class="lg_form_control md_margin_b sm_margin_t" placeholder="Название мероприятия" name="title" id="title" v-model="eventTitle">
                    <label for="description">Описание:</label>
                    <input type="text" class="lg_form_control md_margin_b sm_margin_t" placeholder="Описание мероприятия" name="description" id="description">
                    <div class="date_inputs">
                        <div class="label_wrapper">
                            <label for="from_date">Дата начала:</label>
                            <div class="input_wrapper">
                                <input type="date" name="from_date" class="lg_form_control md_margin_b sm_margin_t">
                                <input type="time" name="from_date" class="lg_form_control md_margin_b sm_margin_t">
                            </div>
                        </div>
                        <div class="label_wrapper">
                            <label for="till_date" id="for_is">Дата окончания:</label>
                            <div class="input_wrapper">
                                <input type="date" id="till_date" name="till_date" class="lg_form_control md_margin_b sm_margin_t">
                                <input type="time" id="till_date" name="till_date" class="lg_form_control md_margin_b sm_margin_t">
                            </div>
                        </div>
                    </div>
                    <label for="location">Место проведения:</label>
                    <input type="text" class="lg_form_control md_margin_b sm_margin_t" placeholder="Место проведения" name="location" id="location">

                    <label>Участники:</label>
                    <div class="participants sm_margin_t">
                        <div class="participants_type md_margin_b">
                            <a v-on:click="studentsToggle" v-bind:class="studActive">Ученики</a>
                            <a v-on:click="groupsToggle" v-bind:class="groupActive">Классы</a>
                            <a v-on:click="parsToggle" v-bind:class="parActive">Параллели</a>
                        </div>
                        <div class="participants_inputs stud_inputs" v-if="studActive != ''">
                            <input type="text" class="md_form_control sm_margin_b" placeholder="stud_inputs" v-for="(stud, index) in studArray" v-model="studArray[index]">
                            <span v-on:click="addStudInput" class="add_span">+ Добавить ученика</span>
                        </div>
                        <div class="participants_inputs group_inputs" v-if="groupActive != ''">
                            <input type="text" class="md_form_control sm_margin_b" placeholder="group_inputs" v-for="(group, index) in groupArray" v-model="groupArray[index]">
                            <span v-on:click="addGroupInput" class="add_span">+ Добавить класс</span>
                        </div>
                        <div class="participants_inputs par_inputs" v-if="parActive != ''">
                            <input type="text" class="md_form_control sm_margin_b" placeholder="par_inputs"v-for="(par, index) in parArray" v-model="parArray[index]">
                            <span v-on:click="addParInput" class="add_span">+ Добавить параллель</span>
                        </div>
                    </div>
                    
                    <button class="lg_button blue_button lg_margin_t lg_margin_b">Добавить</button>
                </form>`,
    data() {
        return {
            eventTitle: '',
            studActive : 'active',
            groupActive : '',
            parActive : '',
            studArray: [''],
            groupArray: [''],
            parArray: ['']
        };
    },
    methods : {
        studentsToggle: function(e) {
            this.studActive = 'active';
            this.groupActive = '';
            this.parActive = '';
        },
        groupsToggle: function(e) {
            this.studActive = '';
            this.groupActive = 'active';
            this.parActive = '';
        },
        parsToggle: function(e) {
            this.studActive = '';
            this.groupActive = '';
            this.parActive = 'active';
        },
        addStudInput : function(e) {
            this.studArray.push('');
        },
        addGroupInput : function(e) {
            this.groupArray.push('');
        },
        addParInput : function(e) {
            this.parArray.push('');
        }
    }

});