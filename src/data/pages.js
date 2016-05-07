module.exports = function() {
  return {
    '05': {
      static: [
        {
          image: 'pg5static1',
          audio: {
            source: 'fundal1',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '15%'
            },
            zone: {
              top: '15%',
              bottom: '66%',
              left: '16%',
              width: '47%'
            }
          }
        },
        {
            image: 'pg5static2',
            audio: {
              source: 'fundal1',
              state: 'stopped'
            },
            trigger: {
              button: {
                top: '25%'
              },
              zone: {
                top: '37%',
                bottom: '32%',
                left: '52%',
                width: '40%'
              }
            }
          },
          {
            image: 'pg5static3',
            audio: {
              source: 'fundal1',
              state: 'stopped'
            },
            trigger: {
              button: {
                top: '37%'
              },
              zone: {
                top: '37%',
                bottom: '32%',
                left: '8%',
                width: '42%'
              }
            }
          }
        ]
     },
    '06': {
      video: [
        {
          video: {
            source: 'test'
          },
          trigger: {
            button: {
              top: '8%'
            },
            zone: {
              top: '8%',
              bottom: '3%'
            }
          }
        }
      ]
    },
    '07': {
      video: [
        {
          video: {
            source: 'test'
          },
          trigger: {
            button: {
              top: '8%'
            },
            zone: {
              top: '8%',
              bottom: '3%'
            }
          }
        }
      ]
    },
    '08': {
      static: [
        {
          image: 'pg8ex3',
          audio: {
            source: 'fundal1',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '72%'
            },
            zone: {
              top: '72%',
              bottom: '1%'
            }
          }
        }
      ],
      exercise: [
        {
          type: 'type',
          title: 'Hör zu, lies und schreib die Nummern!',
          image: 'pg08ex2',
          trigger: {
            button: {
              top: '9%'
            },
            zone: {
              top: '9%',
              bottom: '29%'
            }
          },
          // audio: {
          //   source: 'fundal1',
          //   state: 'stopped'
          // },
          help: {
            toggle: false,
            text: 'Asculta, citeste si scrie numarul.Cand ai terminat apasa pe cheita si verification Succes!'
          },
          data: [
            {
              identifier: 'one',
              position: {
                top: '54.7%',
                left: '54.2%',
                width: '5%',
                height: '4%'
              },
              model: '',
              solution: '9'
            },
            {
              identifier: 'two',
              position: {
                top: '73.5%',
                left: '81.5%',
                width: '5%',
                height: '4%'
              },
              model: '',
              solution: '8'
            },
            {
              identifier: 'three',
              position: {
                top: '36%',
                left: '81.5%',
                width: '5%',
                height: '4%'
              },
              model: '',
              solution: '7'
            },
            {
              identifier: 'four',
              position: {
                top: '54.7%',
                left: '29.6%',
                width: '5%',
                height: '4%'
              },
              model: '',
              solution: '6'
            },
            {
              identifier: 'five',
              position: {
                top: '54.7%',
                left: '81.5%',
                width: '5%',
                height: '4%'
              },
              model: '',
              solution: '5'
            },
            {
              identifier: 'six',
              position: {
                top: '36%',
                left: '54.2%',
                width: '5%',
                height: '4%'
              },
              model: '',
              solution: '4'
            },
            {
              identifier: 'seven',
              position: {
                top: '73.5%',
                left: '29.6%',
                width: '5%',
                height: '4%'
              },
              model: '',
              solution: '3'
            },
            {
              identifier: 'eight',
              position: {
                top: '73.5%',
                left: '54.2%',
                width: '5%',
                height: '4%'
              },
              model: '',
              solution: '2'
            },
            {
              identifier: 'nine',
              position: {
                top: '36%',
                left: '29.6%',
                width: '5%',
                height: '4%'
              },
              model: '',
              solution: '1'
            }
          ]
        }
      ]
    },
    '09': {
      video: [
        {
          video: {
            source: 'test'
          },
          trigger: {
            button: {
              top: '9%'
            },
            zone: {
              top: '9%',
              bottom: '3%'
            }
          }
        }
      ]
    },
    '10': {
      static: [
        {
          image: 'pg10ex5',
          audio: {
            source: 'fundal1',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '8%'
            },
            zone: {
              top: '8%',
              bottom: '43%'
            }
          }
        }
      ],
      video: [
        {
          video: {
            source: 'test'
          },
          trigger: {
            button: {
              top: '58%'
            },
            zone: {
              top: '58%',
              bottom: '3%'
            }
          }
        }
      ]
    },
    '11': {
      static: [
        {
          image: 'pg11nicht',
          audio: {
            source: 'fundal1',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '8%'
            },
            zone: {
              top: '8%',
              bottom: '3%'
            }
          }
        }
      ]
    },
    '13': {
      video: [
        {
          video: {
            source: 'test'
          },
          trigger: {
            button: {
              top: '5%'
            },
            zone: {
              top: '5%',
              bottom: '29%'
            }
          }
        }
      ]
    },
    '14': {
      static: [
        {
          image: 'pg14nicht',
          audio: {
            source: 'fundal1',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '74%'
            },
            zone: {
              top: '74%',
              bottom: '3%'
            }
          }
        }
      ],
      video: [
        {
          video: {
            source: 'test'
          },
          trigger: {
            button: {
              top: '3%'
            },
            zone: {
              top: '3%',
              bottom: '27%'
            }
          }
        }
      ]
    },
    '16': {
      static: [
        {
          image: 'pg16plandekinderreiches',
          audio: {
            source: 'fundal1',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '56%'
            },
            zone: {
              top: '56%',
              bottom: '3%'
            }
          }
        }
      ],
      video: [
        {
          video: {
            source: 'test'
          },
          trigger: {
            button: {
              top: '5%'
            },
            zone: {
              top: '5%',
              bottom: '45%'
            }
          }
        }
      ]
    },
    '17': {
      static: [
        {
          image: 'pg17museumSTATIC1',
          audio: {
            source: 'fundal1',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '9%'
            },
            zone: {
              top: '9%',
              bottom: '61%',
              left: '8%',
              width: '40%'
            }
          }
        },
        {
          image: 'pg17museumSTATIC2',
          audio: {
            source: 'fundal1',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '15%'
            },
            zone: {
              top: '9%',
              bottom: '59%',
              left: '52%',
              width: '40%'
            }
          }
        },
        {
           image: 'pg17museumSTATIC3',
           audio: {
             source: 'fundal1',
             state: 'stopped'
           },
           trigger: {
             button: {
               top: '40%'
             },
             zone: {
               top: '40%',
               bottom: '28%',
               left: '8%',
               width: '40%'
             }
           }
         },
         {
            image: 'pg17museumSTATIC4',
            audio: {
              source: 'fundal1',
              state: 'stopped'
            },
            trigger: {
              button: {
                top: '46%'
              },
              zone: {
                top: '42%',
                bottom: '30%',
                left: '52%',
                width: '40%'
              }
            }
          },
          {
            image: 'pg17museumSTATIC5',
            audio: {
              source: 'fundal1',
              state: 'stopped'
            },
            trigger: {
              button: {
                top: '73%'
              },
              zone: {
                top: '73%',
                bottom: '3%',
                left: '8%',
                width: '38%'
              }
            }
          },
          {
            image: 'pg17museumSTATIC6',
            audio: {
              source: 'fundal1',
              state: 'stopped'
            },
            trigger: {
              button: {
                top: '79%'
              },
              zone: {
                top: '72%',
                bottom: '3%',
                left: '47%',
                width: '43%'
              }
            }
          }
      ]
    },
    '18': {
      video: [
        {
          video: {
            source: 'test'
          },
          trigger: {
            button: {
              top: '4%'
            },
            zone: {
              top: '4%',
              bottom: '2%'
            }
          }
        }
      ]
    },
    '19': {
      static: [
        {
          image: 'pg19ex1static1',
          audio: {
            source: 'fundal1',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '11%'
            },
            zone: {
              top: '11%',
              bottom: '59%',
              left: '8%',
              width: '84%'
            }
          }
        },
        {
           image: 'pg19ex1static2',
           audio: {
             source: 'fundal1',
             state: 'stopped'
           },
           trigger: {
             button: {
               top: '43%'
             },
             zone: {
               top: '43%',
               bottom: '31%',
               left: '8%',
               width: '84%'
             }
           }
         },
         {
            image: 'pg19ex1static3',
            audio: {
              source: 'fundal1',
              state: 'stopped'
            },
            trigger: {
              button: {
                top: '71%'
              },
              zone: {
                top: '71%',
                bottom: '3%',
                left: '8%',
                width: '84%'
              }
            }
          },
      ]
    },
    '21': {
      exercise: [
        {
          type: 'typer',
          title: 'Ergänze die Formen von haben !',
          image: 'pg21ex5',
          trigger: {
            button: {
              top: '34%'
            },
            zone: {
              top: '34%',
              bottom: '36%'
            }
          },
          help: {
            toggle: false,
            text: 'Completeaza cu formele lui “haben”.Cand ai terminat apasa pe cheita si verification Succes!'
          },
          data: [
            {
              identifier: 'one',
              position: {
                top: '42.8%',
                left: '14%',
                width: '22%'
              },
              model: '',
              solution: 'habe'
            },
            {
              identifier: 'two',
              position: {
                top: '46%',
                left: '13%',
                width: '22%'
              },
              model: '',
              solution: 'hat'
            },
            {
              identifier: 'three',
              position: {
                top: '49.2%',
                left: '16%',
                width: '19%'
              },
              model: '',
              solution: 'hat'
            },
            {
              identifier: 'four',
              position: {
                top: '49.2%',
                left: '54%',
                width: '22%'
              },
              model: '',
              solution: 'hat'
            },
            {
              identifier: 'five',
              position: {
                top: '52.4%',
                left: '15%',
                width: '20%'
              },
              model: '',
              solution: 'hast'
            },
            {
              identifier: 'six',
              position: {
                top: '55.8%',
                left: '14%',
                width: '21%'
              },
              model: '',
              solution: 'haben'
            },
            {
              identifier: 'seven',
              position: {
                top: '59%',
                left: '17%',
                width: '18%'
              },
              model: '',
              solution: 'habt'
            },
            {
              identifier: 'eight',
              position: {
                top: '62.3%',
                left: '25%',
                width: '12%'
              },
              model: '',
              solution: 'haben'
            },
            {
              identifier: 'nine',
              position: {
                top: '62.3%',
                left: '67%',
                width: '17%'
              },
              model: '',
              solution: 'haben'
            }
          ]
        }
      ]
    },
    '22': {
      video: [
        {
          video: {
            source: 'test'
          },
          trigger: {
            button: {
              top: '8%'
            },
            zone: {
              top: '8%',
              bottom: '3%'
            }
          }
        }
      ]
    },
    '25': {
      static: [
        {
          image: 'pg25',
          audio: {
            source: 'fundal1',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '15%'
            },
            zone: {
              top: '15%',
              bottom: '24%',
              left: '9%',
              width: '82%'
            }
          }
        }
      ]
    },
    '26': {
      video: [
        {
          video: {
            source: 'test'
          },
          trigger: {
            button: {
              top: '6%'
            },
            zone: {
              top: '6%',
              bottom: '4%'
            }
          }
        }
      ]
    },
    '27': {
      video: [
        {
          video: {
            source: 'test'
          },
          trigger: {
            button: {
              top: '6%'
            },
            zone: {
              top: '6%',
              bottom: '4%'
            }
          }
        }
      ]
    },
    '29': {
      video: [
        {
          video: {
            source: 'test'
          },
          trigger: {
            button: {
              top: '5%'
            },
            zone: {
              top: '5%',
              bottom: '30%'
            }
          }
        }
      ]
    },
    '30': {
      static: [
        {
          image: 'pg30ex5',
          audio: {
            source: 'fundal1',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '6%'
            },
            zone: {
              top: '6%',
              bottom: '45%'
            }
          }
        },
        {
          image: 'pg30nicht',
          audio: {
            source: 'fundal1',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '76%'
            },
            zone: {
              top: '76%',
              bottom: '3%'
            }
          }
        }
      ]
    },
    '31': {
      static: [
        {
          image: 'pg31ex7',
          audio: {
            source: 'fundal1',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '6%'
            },
            zone: {
              top: '6%',
              bottom: '29%'
            }
          }
        }
      ]
    },
    '32': {
      video: [
        {
          video: {
            source: 'test'
          },
          trigger: {
            button: {
              top: '6%'
            },
            zone: {
              top: '6%',
              bottom: '35%'
            }
          }
        }
      ]
    },
    '33': {
      static: [
        {
          image: 'pg33ex11',
          audio: {
            source: 'fundal1',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '7%'
            },
            zone: {
              top: '7%',
              bottom: '47%'
            }
          }
        }
      ]
    },
    '34': {
      static: [
        {
          image: 'pg34nicht',
          audio: {
            source: 'fundal1',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '79%'
            },
            zone: {
              top: '79%',
              bottom: '3%'
            }
          }
        }
      ],
      video: [
        {
          video: {
            source: 'test'
          },
          trigger: {
            button: {
              top: '5%'
            },
            zone: {
              top: '5%',
              bottom: '22%'
            }
          }
        }
      ]
    },
    '36': {
      static: [
        {
          image: 'pg36ex17static1',
          audio: {
            source: 'fundal1',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '7%'
            },
            zone: {
              top: '7%',
              bottom: '57%'
            }
          }
        },
        {
           image: 'pg36ex17static2',
           audio: {
             source: 'fundal1',
             state: 'stopped'
           },
           trigger: {
             button: {
               top: '44%'
             },
             zone: {
               top: '44%',
               bottom: '32%'
             }
           }
         },
         {
           image: 'pg36ex17static3',
           audio: {
             source: 'fundal1',
             state: 'stopped'
           },
           trigger: {
             button: {
               top: '69%'
             },
             zone: {
               top: '69%',
               bottom: '3%'
             }
           }
         }
      ]
    },
    '37': {
      static: [
        {
          image: 'pg37ex17',
          audio: {
            source: 'fundal1',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '7%'
            },
            zone: {
              top: '7%',
              bottom: '66%'
            }
          }
        },
        {
          image: 'pg37nicht',
          audio: {
            source: 'fundal1',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '35%'
            },
            zone: {
              top: '35%',
              bottom: '3%'
            }
          }
        }
      ]
    },
    '38': {
      static: [
        {
          image: 'pg38ex19',
          audio: {
            source: 'fundal1',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '68%'
            },
            zone: {
              top: '68%',
              bottom: '3%'
            }
          }
        }
      ]
    },
    '40': {
      static: [
        {
          image: 'pg40ex23',
          audio: {
            source: 'fundal1',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '12%'
            },
            zone: {
              top: '12%',
              bottom: '32%'
            }
          }
        }
      ]
    },
    '41': {
      static: [
        {
          image: 'pg41static1',
          audio: {
            source: 'fundal1',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '10%'
            },
            zone: {
              top: '10%',
              bottom: '63%'
            }
          }
        },
        {
          image: 'pg41static2',
          audio: {
            source: 'fundal1',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '38%'
            },
            zone: {
              top: '38%',
              bottom: '35%'
            }
          }
        },
        {
          image: 'pg41static3',
          audio: {
            source: 'fundal1',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '66%'
            },
            zone: {
              top: '66%',
              bottom: '4%'
            }
          }
        }
      ]
    },
    '42': {
      static: [
        {
          image: 'pg42ex24',
          audio: {
            source: 'fundal1',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '12%'
            },
            zone: {
              top: '12%',
              bottom: '3%'
            }
          }
        }
      ]
    },
    '46': {
      video: [
        {
          video: {
            source: 'test'
          },
          trigger: {
            button: {
              top: '6%'
            },
            zone: {
              top: '6%',
              bottom: '45%'
            }
          }
        }
      ]
    },
    '47': {
      static: [
        {
          image: 'pg47static1',
          audio: {
            source: 'fundal1',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '21%'
            },
            zone: {
              top: '21%',
              bottom: '51%',
              left: '9%',
              width: '40%'
            }
          }
        },
        {
           image: 'pg47static2',
           audio: {
             source: 'fundal1',
             state: 'stopped'
           },
           trigger: {
             button: {
               top: '36%'
             },
             zone: {
               top: '36%',
               bottom: '33%',
               left: '53%',
               width: '40%'
             }
           }
         },
         {
            image: 'pg47static3',
            audio: {
              source: 'fundal1',
              state: 'stopped'
            },
            trigger: {
              button: {
                top: '51%'
              },
              zone: {
                top: '51%',
                bottom: '22%',
                left: '10%',
                width: '40%'
              }
            }
          }
      ]
    },
    '48': {
      video: [
        {
          video: {
            source: 'test'
          },
          trigger: {
            button: {
              top: '6%'
            },
            zone: {
              top: '6%',
              bottom: '3%'
            }
          }
        }
      ]
    },
    '49': {
      video: [
        {
          video: {
            source: 'test'
          },
          trigger: {
            button: {
              top: '6%'
            },
            zone: {
              top: '6%',
              bottom: '3%'
            }
          }
        }
      ]
    },
    '50': {
      static: [
        {
          image: 'pg50nicht',
          audio: {
            source: 'fundal1',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '73%'
            },
            zone: {
              top: '73%',
              bottom: '3%'
            }
          }
        }
      ],
      video: [
        {
          video: {
            source: 'test'
          },
          trigger: {
            button: {
              top: '6%'
            },
            zone: {
              top: '6%',
              bottom: '28%'
            }
          }
        }
      ]
    },
    '51': {
      video: [
        {
          video: {
            source: 'test'
          },
          trigger: {
            button: {
              top: '42%'
            },
            zone: {
              top: '42%',
              bottom: '3%'
            }
          }
        }
      ]
    },
    '52': {
      video: [
        {
          video: {
            source: 'test'
          },
          trigger: {
            button: {
              top: '47%'
            },
            zone: {
              top: '47%',
              bottom: '3%'
            }
          }
        }
      ]
    },
    '53': {
      static: [
        {
          image: 'pg53nicht',
          audio: {
            source: 'fundal1',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '8%'
            },
            zone: {
              top: '8%',
              bottom: '54%'
            }
          }
        }
      ],
      video: [
        {
          video: {
            source: 'test'
          },
          trigger: {
            button: {
              top: '47%'
            },
            zone: {
              top: '47%',
              bottom: '3%'
            }
          }
        }
      ]
    },
    '54': {
      video: [
        {
          video: {
            source: 'test'
          },
          trigger: {
            button: {
              top: '7%'
            },
            zone: {
              top: '7%',
              bottom: '3%'
            }
          }
        }
      ]
    },
    '56': {
      static: [
        {
          image: 'pg56nicht',
          audio: {
            source: 'fundal1',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '66%'
            },
            zone: {
              top: '66%',
              bottom: '3%'
            }
          }
        }
      ]
    },
    '57': {
      video: [
        {
          video: {
            source: 'test'
          },
          trigger: {
            button: {
              top: '7%'
            },
            zone: {
              top: '7%',
              bottom: '3%'
            }
          }
        }
      ]
    },
    '58': {
      video: [
        {
          video: {
            source: 'test'
          },
          trigger: {
            button: {
              top: '5%'
            },
            zone: {
              top: '5%',
              bottom: '3%'
            }
          }
        }
      ]
    },
    '60': {
      static: [
        {
          image: 'pg60legoSTATIC1',
          audio: {
            source: 'fundal1',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '23%'
            },
            zone: {
              top: '23%',
              bottom: '55%'
            }
          }
        },
        {
          image: 'pg60legoSTATIC2',
          audio: {
            source: 'fundal1',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '47%'
            },
            zone: {
              top: '47%',
              bottom: '3%'
            }
          }
        }
      ]
    },
    '61': {
      static: [
        {
          image: 'pg61legoSTATIC1',
          audio: {
            source: 'fundal1',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '8%'
            },
            zone: {
              top: '8%',
              bottom: '37%'
            }
          }
        },
        {
          image: 'pg61legoSTATIC2',
          audio: {
            source: 'fundal1',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '64%'
            },
            zone: {
              top: '64%',
              bottom: '3%'
            }
          }
        }
      ]
    },
    '62': {
      video: [
        {
          video: {
            source: 'test'
          },
          trigger: {
            button: {
              top: '7%'
            },
            zone: {
              top: '7%',
              bottom: '3%'
            }
          }
        }
      ]
    },
    '64': {
      video: [
        {
          video: {
            source: 'test'
          },
          trigger: {
            button: {
              top: '8%'
            },
            zone: {
              top: '8%',
              bottom: '3%'
            }
          }
        }
      ]
    },
    '67': {
      video: [
        {
          video: {
            source: 'test'
          },
          trigger: {
            button: {
              top: '58%'
            },
            zone: {
              top: '58%',
              bottom: '3%'
            }
          }
        }
      ]
    },
    '69': {
      static: [
        {
          image: 'pg69static1',
          audio: {
            source: 'fundal1',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '21%'
            },
            zone: {
              top: '21%',
              bottom: '45%'
            }
          }
        },
        {
          image: 'pg69static2',
          audio: {
            source: 'fundal1',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '56%'
            },
            zone: {
              top: '56%',
              bottom: '6%'
            }
          }
        }
      ]
    },
    '70': {
      video: [
        {
          video: {
            source: 'test'
          },
          trigger: {
            button: {
              top: '14%'
            },
            zone: {
              top: '14%',
              bottom: '3%'
            }
          }
        }
      ]
    },
    '76': {
      video: [
        {
          video: {
            source: 'test'
          },
          trigger: {
            button: {
              top: '7%'
            },
            zone: {
              top: '7%',
              bottom: '3%'
            }
          }
        }
      ]
    },
    '77': {
      video: [
        {
          video: {
            source: 'test'
          },
          trigger: {
            button: {
              top: '7%'
            },
            zone: {
              top: '7%',
              bottom: '3%'
            }
          }
        }
      ]
    }
  }
}
