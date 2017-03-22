

// KEYDOWN EVENTS

$('body').on('keydown',function(e){
        if(e.which==49){
              c4();
        }
    });

$('body').on('keydown',function(e){
        if(e.which==50){
              d4();
        }
    });

$('body').on('keydown',function(e){
        if(e.which==51){
              e4();
        }
    });

$('body').on('keydown',function(e){
        if(e.which==52){
              f4();
        }
    });


  $('body').on('keydown',function(e){
          if(e.which==53){
               g4();
          }
      });

  $('body').on('keydown',function(e){
          if(e.which==54){
                a4();
          }
      });

  $('body').on('keydown',function(e){
          if(e.which==55){
                b4();
          }
      });

  $('body').on('keydown',function(e){
          if(e.which==56){
                c5();
          }
      });




// turn loop on and off with Q-key

  $('body').on('keydown',function(e){

              if(e.which==81){
                  loop();
              }


          });



  $('body').on('keyup',function(e){
              if(e.which==81){
                  pause();
                  audio.currentTime = .05;
          }
      });




// KEYUPEVENTS


//
// $('body').on('keyup',function(e){
//         if(e.which==50){
//               d4();
//         }
//     });
//
// $('body').on('keyup',function(e){
//         if(e.which==51){
//               e4();
//         }
//     });
//
// $('body').on('keyup',function(e){
//         if(e.which==52){
//               f4();
//         }
//     });
//
//
//   $('body').on('keyup',function(e){
//           if(e.which==53){
//                g4();
//           }
//       });
//
//   $('body').on('keyup',function(e){
//           if(e.which==54){
//                 a4();
//           }
//       });
//
//   $('body').on('keyup',function(e){
//           if(e.which==55){
//                 b4();
//           }
//       });
//
//   $('body').on('keyup',function(e){
//           if(e.which==56){
//                 c5();
//           }
//       });








// // KEYDOWN and KEYUP EVENTS

// $('body').on('keydown keyup',function(e){
//         if(e.which==80){
//               comingSoon
//         }
//     });
//
// $('body').on('keydown keyup',function(e){
//         if(e.which==81){
//               comingSoon
//         }
//     });
//
// $('body').on('keydown keyup',function(e){
//         if(e.which==82){
//               comingSoon
//         }
//     });
