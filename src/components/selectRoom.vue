<template>
  <div class="calendar-container">
    <vue-fullcalendar
      class="calendar"
      :options="options"
      :resources="resources"
      :events="events"
      @drop="handleDropIn"
      @eventClick="handleClickEvent" @resourceRender="resourceRecender">
    </vue-fullcalendar>
    <!--<button type="primary" @click="updateOptions">updateOptions</button>-->
    <!--<button class="flex1 blueFontColor" @click="updateOptions">changeResources</button>-->
    <!--<button class="flex1 blueFontColor" @click="changeEvents">changeEvents</button>-->
    <button style="float: left;margin-bottom: 10px;" @click="$router.go(-1)">返回</button>
  </div>
</template>
<script>

import VueFullcalendar from './calendar'
import $ from 'jquery'
import {addClass, removeClass, hasClassname} from '../assets/filter'

export default {
  name: 'selectRoom',
  components: {
    VueFullcalendar
  },
  data () {
    return {
      options: {
        locale: 'en-cn',
        // now: new Date().getTime(),
        scrollTime: '10:00',
        editable: true,
        selectable: true,
        allDaySlot: false,
        defaultView: 'timelineDay',
        eventResourceField: 'room',
        slotLabelFormat: 'HH:mm',
        slotDuration: '15',
        header: false,
        height: 400,
        setGridHeight: 28,
        resourceColumns: [
          {
            labelText: 'Room',
            field: 'title'
          }
        ]
      },
      resources: [{
        id: 1,
        title: 'Room A',
        occupancy: 40
      }, {
        id: 2,
        title: 'Room B',
        occupancy: 40
      }, {
        id: 3,
        title: 'Room C',
        occupancy: 40
      }, {
        id: 4,
        title: 'Room 4',
        occupancy: 40
      }, {
        id: 5,
        title: 'Room 5',
        occupancy: 40
      }, {
        id: 12,
        title: 'Room B',
        occupancy: 40
      }, {
        id: 13,
        title: 'Room C',
        occupancy: 40
      }, {
        id: 14,
        title: 'Room 4',
        occupancy: 40
      }, {
        id: 15,
        title: 'Room 5',
        occupancy: 40
      }, {
        id: 32,
        title: 'Room B',
        occupancy: 40
      }, {
        id: 33,
        title: 'Room C',
        occupancy: 40
      }, {
        id: 34,
        title: 'Room 4',
        occupancy: 40
      }, {
        id: 35,
        title: 'Room 5',
        occupancy: 40
      }, {
        id: 42,
        title: 'Room B',
        occupancy: 40
      }, {
        id: 143,
        title: 'Room C',
        occupancy: 40
      }, {
        id: 144,
        title: 'Room 4',
        occupancy: 40
      }, {
        id: 415,
        title: 'Room 5',
        occupancy: 40
      }],
      events: [{
        id: 1,
        room: 1,
        title: 'Meeting',
        start: '2018-10-31 10:00'
      }, {
        id: 2,
        room: 1,
        title: '测试',
        start: '2018-10-31 12:30'
      }]
    }
  },
  created: function () {
  },
  watch: {
  },
  methods: {
    updateOptions () {
      this.options = {
        locale: 'zh-cn',
        editable: true,
        selectable: false,
        droppable: true,
        handleWindowResize: true,
        slotEventOverlap: false,
        slotLabelFormat: 'HH:mm',
        header: false
      }
    },
    changeResources () {
      this.resources = [{
        id: 1,
        title: 'Room A'
      }, {
        id: 2,
        title: 'Room B'
      }, {
        id: 3,
        title: 'Room C'
      }, {
        id: 4,
        title: 'Room D'
      }]
    },
    changeEvents () {
      this.events = [{
        id: 1,
        room: 1,
        title: 'Meeting',
        start: '2018-06-28 10:00'
      }, {
        id: 2,
        room: 2,
        title: '测试',
        start: '2018-06-28 12:00'
      }, {
        id: 3,
        room: 3,
        title: '测试',
        start: '2018-06-28 08:00'
      }]
    },
    handleDropIn (date, jsEvent, ui, resourceId) {
      console.log(date)
      console.log(jsEvent)
      console.log(ui)
      console.log(resourceId)
    },
    handleClickEvent (calEvent, jsEvent, view) {
      console.log(calEvent)
      console.log(jsEvent)
      console.log(view)
    },
    resourceRecender (calEvent, jsEvent, view) {
      jsEvent.on('click', function () {
        console.log(calEvent.title)
        console.log(jsEvent)
        // console.log(view[0])
        $('.fc-expander-space').removeClass('scheduler_default_bg_blue')
        let element = jsEvent[0].children[0].firstChild.firstChild
        if (hasClassname(element, 'scheduler_default_bg_blue')) {
          removeClass(element, 'scheduler_default_bg_blue')
        } else {
          console.log('2222')
          addClass(element, 'scheduler_default_bg_blue')
          console.log(element)
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .external-events {
    position: fixed;
    z-index: 2;
    top: 120px;
    left: 20px;
    width: 150px;
    padding: 0 10px;
    border: 1px solid #ccc;
    background: #eee;
  }
  .calendar-container {
    width: 100%;
    height: 90%;
  }
  .calendar {
    width: 100%;
    margin: 20px auto;
  }
</style>
