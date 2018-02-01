(function(){
      
      angular
      .module("Icon")
      .controller("listCtrl", ['$http', ListController]);


      function ListController($http,$scope){
           var vm = this;

           vm.data = iconsData;
           vm.activeIcon = {};
           vm.changeActiveIcon = changeActiveIcon;

           vm.size= iconSize;
           vm.activeSize = {};
           vm.changeSize = changeSize;

           for (var i = 0; i < vm.data.length; i++) {
              $http.get(vm.data[i].imgAI, {index: i}).then(function(response) {
                vm.data[response.config.index].code = response.data;
              });
           }
           for (var i = 0; i < vm.data.length; i++) {
              $http.get(vm.data[i].img, {index: i}).then(function(response) {
                vm.data[response.config.index].code_negative = response.data;
              });
           }
         
          vm.favcolor = '#000';  
        }
  
      function changeActiveIcon(index){
        var vm = this;
        vm.activeIcon = index;
      }

      var iconsData = [
          {
          name:"Find a dealer",
          type: "Icon",
          details: "something",
          img: "img/01-find-a-dealer-ui.svg",
          imgAI: "icon/01-find-a-dealer.svg",
          size:"48px",
          },
          {
          name:"No smoking",
          type: "Icon",
          details: "something",
          img: "img/93-no-smoking-ui.svg",
          imgAI: "icon/93-no-smoking.svg",
          },
          {
          name:"No drugs or alcohol",
          type: "Icon",
          details: "something-1",
          img: "img/94-no-drugs-or-alcohol-ui.svg",
          imgAI: "icon/94-no-drugs-or-alcohol.svg",
          },
          {
          name:"Drivers licence required",
          type: "Icon",
          details: "something-2",
          img: "img/95-drivers-licence-required-ui.svg",
          imgAI: "icon/95-drivers-licence-required.svg",
          },
           {
          name:"Forbidden to enter course",
          type: "Icon",
          details: "something-3",
          img: "img/96-forbidden-to-enter-course-ui.svg",
          imgAI: "icon/96-forbidden-to-enter-course.svg",
          },
          {
          name:"Listen to demo driver",
          type: "Icon",
          details: "something-4",
          img: "img/99-listen-to-demo-driver-ui.svg",
          imgAI: "icon/99-listen-to-demo-driver.svg",
          },
          {
          name:"E mail",
          type: "Icon",
          details: "something-5",
          img: "img/23-e-mail-ui.svg",
          imgAI: "icon/23-e-mail.svg",
          },
          {
          name:"Search-desktop-in-field-delete",
          type: "Icon",
          details: "something-6",
          img: "img/03-search-desktop-in-field-delete-ui.svg",
          imgAI: "icon/03-search-desktop-in-field-delete.svg",
          },
          {
          name:"My mobile",
          type: "Icon",
          details: "something-7",
          img: "img/08-my-mobile-ui.svg",
          imgAI: "icon/08-my-mobile.svg",
          },
          {
          name:"Tick icon",
          type: "Icon",
          details: "something-8",
          img: "img/15-tick-icon-ui.svg",
          imgAI: "icon/15-tick-icon.svg",
          },
          {
          name:"No photo",
          type: "Icon",
          details: "something-9",
          img: "img/92-no-photo-ui.svg",
          imgAI: "icon/92-no-photo.svg",
          },
          {
          name:"Video play",
          type: "Icon",
          details: "something-9",
          img: "img/11-video-play-ui.svg",
          imgAI: "icon/11-video-play.svg",
          },
      ];

        
      function changeSize(index){
        var vm = this;
        vm.activeSize = index;
      }

      var iconSize = [
            {
              name: "24px",
              size: "24px",
              class: "md-24",
            },
            {
              name: "48px",
              size: "48px",
              class: "md-48",
            },
            {
              name: "64px",
              size: "64px",
              class: "md-64",
            }
      ];
    
     
})();
