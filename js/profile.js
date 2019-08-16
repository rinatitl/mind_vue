const profile_header = Vue.component({
    
});


// TIMETABLE

const time_in_block = document.querySelector('.timetable_input_block');

const timetable = Vue.component('timetable' , {
    template:   `<div class="timetable_cont temp_cont">
                    <div class="timetable_header">
                        <h3>Расписание</h3> 
                        <div class="timetable_input_block" @click="arrowClick" :class="{ 'arrow_up' : arrowClicked}" >
                            <input type="text" @click="arrowClick"  id="timetable_day" :value="dayValue" disabled  >
                            <div class="arrow" @click="arrowClick"></div>
                        </div>
                        <ul  class="day_select" :style="{ display : daySelect }" >
                            <li 
                            v-for="day in weekdays" 
                            :key="day"
                            v-if="dayValue != day"
                            @click="changeDay(day, index)"
                            >{{day}}</li>
                        </ul>
                    </div>
                    <div class="timetable_inner">

                    </div>
                </div>`,
    data() {
        return {
            dayValue : 'Понедельник',
            arrowClicked : false,
            daySelect : 'none',
            weekdays : [
                'Понедельник' , 'Вторник' , 'Среда' , 'Четверг' , 'Пятница' , 'Суббота' , 'Воскресенье'
            ]
        };
    },
    methods : {
        arrowClick : function(e) {
            this.arrowClicked = !this.arrowClicked;
            if (this.arrowClicked) {
                this.daySelect = 'block'; 
            }
            else 
                this.daySelect = 'none';
        },
        changeDay : function(val, n) {
            this.daySelect = 'none';
            this.dayValue = val;
            this.arrowClicked = false;
        }
    }

});