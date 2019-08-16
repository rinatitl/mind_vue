const sidebar = Vue.component('sidebar', {
    template : `<div id="sidebar" :class="{ 'sidebar_open' : sidebarOpen  }">
                    <div id="sidebar_toggle" @click="sidebarToggle">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div id="page_links">
                        <ul>
                            <li><a href="/" class="profile_link"></a></li>
                            <li><a href="/voting" class="voting_link"></a></li>
                            <li><a href="/events" class="events_link"> </a></li>
                            <li><a href="/balance.html" class="balance_link"></a></li>
                            <li><a href="/timetable" class="timetable_link"></a></li>
                            <li><a href="/marks" class="marks_link"></a></li>
                            <li><a href="/ask" class="ask_link"></a></li>
                            <li><a href="/docs" class="docs_link"></a></li>
                        </ul>
                    </div>
                    <div class="sidebar_mask" :class="{ visible : maskVisible }" @click='sidebarClose'></div>
                </div>`,
    data() {
        return {
            sidebarOpen : false,
            maskVisible: false
        };
    },
    computed : {
    },
    methods : {
        sidebarToggle : function() {
            this.sidebarOpen = !this.sidebarOpen;
            if (this.sidebarOpen) {
                setTimeout(() => {
                    this.maskVisible = true;
                }, 300);
            }
            else {
                this.maskVisible = false;
            }
        },
        sidebarClose : function() {
            this.sidebarOpen = false;
            this.maskVisible = false;
        }
    }
});