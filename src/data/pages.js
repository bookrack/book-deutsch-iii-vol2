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
    '23': {
      exercise: [
        {
          type: 'picker',
          title: 'Lies! In jedem Satz gibt es Wörter, die dort falsch sind. Schreib sie unten und du findest ein deutsches Sprichwort.',
          image: 'pg23ex8a',
          trigger: {
            button: {
              top: '11%'
            },
            zone: {
              top: '11%',
              bottom: '18%'
            }
          },
          help: {
            toggle: false,
            text: 'In fiecare propozitie exista cuvinte in plus. Scrise la rand formeaza un proverb.'
          },
          data: [
            {
              identifier: 'one',
              model: '',
              position: {
                top: '22.1%',
                left: '40.8%',
                width: '6.8%',
                height: '2.5%'
              },
              answer: {
                left: '0'
              }
            },
            {
              identifier: 'two',
              model: '',
              position: {
                top: '24.5%',
                left: '31.8%',
                width: '12.5%',
                height: '2.5%'
              },
              answer: {
                left: '0'
              }
            },
            {
              identifier: 'three',
              model: '',
              position: {
                top: '26.8%',
                left: '24.1%',
                width: '7.2%',
                height: '2.5%'
              },
              answer: {
                left: '0'
              }
            },
            {
              identifier: 'four',
              model: '',
              position: {
                top: '44.5%',
                left: '57.4%',
                width: '7.2%',
                height: '2.5%'
              },
              answer: {
                left: '0'
              }
            },
            {
              identifier: 'five',
              model: '',
              position: {
                top: '51.9%',
                left: '55.2%',
                width: '7%',
                height: '2.5%'
              },
              answer: {
                left: '0'
              }
            },
            {
              identifier: 'six',
              model: '',
              position: {
                top: '54.2%',
                left: '57.8%',
                width: '7.6%',
                height: '2.5%'
              },
              answer: {
                left: '0'
              }
            },
            {
              identifier: 'seven',
              model: '',
              position: {
                top: '56.6%',
                left: '46.3%',
                width: '15.5%',
                height: '2.5%'
              },
              answer: {
                left: '0'
              }
            }
          ]
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
    '28': {
      exercise: [
        {
          type: 'type',
          title: 'Hör zu, zeig und schreib die Nummern!',
          image: 'pg28ex2',
          trigger: {
            button: {
              top: '8%'
            },
            zone: {
              top: '8%',
              bottom: '4%'
            }
          },
          help: {
            toggle: false,
            text: 'Asculta si scrie numarul.Cand ai terminat apasa pe cheita si verification Succes!'
          },
          data: [
            {
              identifier: 'one',
              position: {
                top: '83.8%',
                left: '39.7%',
                width: '6.6%',
                height: '5.5%'
              },
              model: '',
              solution: '1'
            },
            {
              identifier: 'two',
              position: {
                top: '30.8%',
                left: '12%',
                width: '6.6%',
                height: '5.5%'
              },
              model: '',
              solution: '2'
            },
            {
              identifier: 'three',
              position: {
                top: '57%',
                left: '10.8%',
                width: '6.6%',
                height: '5.5%'
              },
              model: '',
              solution: '3'
            },
            {
              identifier: 'four',
              position: {
                top: '83.8%',
                left: '66.6%',
                width: '6.6%',
                height: '5.5%'
              },
              model: '',
              solution: '4'
            },
            {
              identifier: 'five',
              position: {
                top: '30.8%',
                left: '65.6%',
                width: '6.6%',
                height: '5.5%'
              },
              model: '',
              solution: '5'
            },
            {
              identifier: 'six',
              position: {
                top: '83.8%',
                left: '13%',
                width: '6.6%',
                height: '5.5%'
              },
              model: '',
              solution: '6'
            },
            {
              identifier: 'seven',
              position: {
                top: '57%',
                left: '38.8%',
                width: '6.6%',
                height: '5.5%'
              },
              model: '',
              solution: '7'
            },
            {
              identifier: 'eight',
              position: {
                top: '57%',
                left: '67.2%',
                width: '6.6%',
                height: '5.5%'
              },
              model: '',
              solution: '8'
            },
            {
              identifier: 'nine',
              position: {
                top: '30.8%',
                left: '38.8%',
                width: '6.6%',
                height: '5.5%'
              },
              model: '',
              solution: '9'
            }
          ]
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
      ],
      exercise: [
        {
          type: 'checker',
          title: 'Lies und kreuze an: RICHTIG - FALSCH!',
          image: 'pg32ex10',
          trigger: {
            button: {
              top: '66%'
            },
            zone: {
              top: '66%',
              bottom: '3%'
            }
          },
          help: {
            toggle: false,
            text: 'Citeste si bifeaza R(corect) sau F(gresit)Cand ai terminat apasa pe cheita si verification Succes!'
          },
          data: [
            {
              identifier: 'one',
              model: '',
              position: {
                top: '38.5%',
                left: '79.9%',
                width: '8.4%',
                height: '2.5%'
              },
              answerFalse: {
                top: '9%',
                left: '54%'
              },
              answerTrue: {
                top: '9%',
                left: '8%'
              }
            },
            {
              identifier: 'two',
              model: '',
              position: {
                top: '41.6%',
                left: '79.9%',
                width: '8.4%',
                height: '2.5%'
              },
              answerTrue: {
                top: '9%',
                left: '54%'
              },
              answerFalse: {
                top: '9%',
                left: '8%'
              }
            },
            {
              identifier: 'three',
              model: '',
              position: {
                top: '44.6%',
                left: '79.9%',
                width: '8.4%',
                height: '2.5%'
              },
              answerTrue: {
                top: '9%',
                left: '54%'
              },
              answerFalse: {
                top: '9%',
                left: '8%'
              }
            },
            {
              identifier: 'four',
              model: '',
              position: {
                top: '47.6%',
                left: '79.9%',
                width: '8.4%',
                height: '2.5%'
              },
              answerFalse: {
                top: '9%',
                left: '54%'
              },
              answerTrue: {
                top: '9%',
                left: '8%'
              }
            },
            {
              identifier: 'five',
              model: '',
              position: {
                top: '50.6%',
                left: '79.9%',
                width: '8.4%',
                height: '2.5%'
              },
              answerFalse: {
                top: '9%',
                left: '54%'
              },
              answerTrue: {
                top: '9%',
                left: '8%'
              }
            },
            {
              identifier: 'six',
              model: '',
              position: {
                top: '53.6%',
                left: '79.9%',
                width: '8.4%',
                height: '2.5%'
              },
              answerTrue: {
                top: '9%',
                left: '54%'
              },
              answerFalse: {
                top: '9%',
                left: '8%'
              }
            },
            {
              identifier: 'seven',
              model: '',
              position: {
                top: '56.6%',
                left: '79.9%',
                width: '8.4%',
                height: '2.5%'
              },
              answerTrue: {
                top: '9%',
                left: '54%'
              },
              answerFalse: {
                top: '9%',
                left: '8%'
              }
            },
            {
              identifier: 'eight',
              model: '',
              position: {
                top: '59.6%',
                left: '79.9%',
                width: '8.4%',
                height: '2.5%'
              },
              answerFalse: {
                top: '9%',
                left: '54%'
              },
              answerTrue: {
                top: '9%',
                left: '8%'
              }
            }
          ]
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
    '43': {
      exercise: [
        {
          type: 'typer',
          title: 'Was für Bücher sind das?',
          image: 'pg43ex1',
          trigger: {
            button: {
              top: '14%'
            },
            zone: {
              top: '14%',
              bottom: '4%'
            }
          },
          help: {
            toggle: false,
            text: 'Scrie ce tip de carti sunt cele ilustrate. Cand ai terminat apasa pe cheita si verification Succes!'
          },
          data: [
            {
              identifier: 'one',
              position: {
                top: '31%',
                left: '16%',
                width: '20%'
              },
              model: '',
              solution: 'Krimi'
            },
            {
              identifier: 'two',
              position: {
                top: '37.3%',
                left: '55.5%',
                width: '20%'
              },
              model: '',
              solution: 'Gruselbuch'
            },
            {
              identifier: 'three',
              position: {
                top: '46.9%',
                left: '16%',
                width: '20%'
              },
              model: '',
              solution: 'Märchenbuch'
            },
            {
              identifier: 'four',
              position: {
                top: '53.2%',
                left: '55.5%',
                width: '20%'
              },
              model: '',
              solution: 'Comic'
            },
            {
              identifier: 'five',
              position: {
                top: '62.8%',
                left: '16%',
                width: '20%'
              },
              model: '',
              solution: 'Roman'
            },
            {
              identifier: 'six',
              position: {
                top: '69%',
                left: '53.5%',
                width: '28%'
              },
              model: '',
              solution: 'Science-Fiction-Buch'
            },
            {
              identifier: 'seven',
              position: {
                top: '78.6%',
                left: '16%',
                width: '20%'
              },
              model: '',
              solution: 'Tierbuch'
            },
            {
              identifier: 'eight',
              position: {
                top: '85%',
                left: '55.5%',
                width: '20%'
              },
              model: '',
              solution: 'Aben­teuerbuch'
            }
          ]
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
      ],
      exercise: [
        {
          type: 'checker',
          title: 'Lies und kreuze RICHTIG oder FALSCH an!',
          image: 'pg51ex3',
          trigger: {
            button: {
              top: '6%'
            },
            zone: {
              top: '6%',
              bottom: '59%'
            }
          },
          help: {
            toggle: false,
            text: 'Citeste si bifeaza R(corect) sau F(gresit). Cand ai terminat apasa pe cheita si verification Succes!'
          },
          data: [
            {
              identifier: 'one',
              model: '',
              position: {
                top: '36%',
                left: '81.2%',
                width: '8.1%',
                height: '2.6%'
              },
              answerFalse: {
                top: '9%',
                left: '54%'
              },
              answerTrue: {
                top: '9%',
                left: '8%'
              }
            },
            {
              identifier: 'two',
              model: '',
              position: {
                top: '39.4%',
                left: '81.2%',
                width: '8.1%',
                height: '2.6%'
              },
              answerTrue: {
                top: '9%',
                left: '54%'
              },
              answerFalse: {
                top: '9%',
                left: '8%'
              }
            },
            {
              identifier: 'three',
              model: '',
              position: {
                top: '42.6%',
                left: '81.2%',
                width: '8.1%',
                height: '2.6%'
              },
              answerFalse: {
                top: '9%',
                left: '54%'
              },
              answerTrue: {
                top: '9%',
                left: '8%'
              }
            },
            {
              identifier: 'four',
              model: '',
              position: {
                top: '48.3%',
                left: '81.2%',
                width: '8.1%',
                height: '2.6%'
              },
              answerFalse: {
                top: '9%',
                left: '54%'
              },
              answerTrue: {
                top: '9%',
                left: '8%'
              }
            },
            {
              identifier: 'five',
              model: '',
              position: {
                top: '51.5%',
                left: '81.2%',
                width: '8.1%',
                height: '2.6%'
              },
              answerTrue: {
                top: '9%',
                left: '54%'
              },
              answerFalse: {
                top: '9%',
                left: '8%'
              }
            },
            {
              identifier: 'six',
              model: '',
              position: {
                top: '54.8%',
                left: '81.2%',
                width: '8.1%',
                height: '2.6%'
              },
              answerTrue: {
                top: '9%',
                left: '54%'
              },
              answerFalse: {
                top: '9%',
                left: '8%'
              }
            },
            {
              identifier: 'seven',
              model: '',
              position: {
                top: '58.1%',
                left: '81.2%',
                width: '8.1%',
                height: '2.6%'
              },
              answerFalse: {
                top: '9%',
                left: '54%'
              },
              answerTrue: {
                top: '9%',
                left: '8%'
              }
            },
            {
              identifier: 'eight',
              model: '',
              position: {
                top: '61.4%',
                left: '81.2%',
                width: '8.1%',
                height: '2.6%'
              },
              answerFalse: {
                top: '9%',
                left: '54%'
              },
              answerTrue: {
                top: '9%',
                left: '8%'
              }
            }
          ]
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
      ],
      exercise: [
        {
          type: 'checker',
          title: 'Hör zu und umkreis den richtigen Preis!',
          image: 'pg56ex10',
          trigger: {
            button: {
              top: '10%'
            },
            zone: {
              top: '10%',
              bottom: '53%'
            }
          },
          // audio: {
          //   source: 'fundal1',
          //   state: 'stopped'
          // },
          help: {
            toggle: false,
            text: 'Asculta si bifeaza pretul corect. Cand ai terminat apasa pe cheita si verification Succes!'
          },
          data: [
            {
              identifier: 'one',
              model: '',
              position: {
                top: '35.4%',
                left: '10.2%',
                width: '8.6%',
                height: '5.1%'
              },
              answerFalse: {
                top: '7%',
                left: '44%'
              },
              answerTrue: {
                top: '50%',
                left: '44%'
              }
            },
            {
              identifier: 'two',
              model: '',
              position: {
                top: '35%',
                left: '49.2%',
                width: '8.6%',
                height: '5.1%'
              },
              answerTrue: {
                top: '7%',
                left: '44%'
              },
              answerFalse: {
                top: '50%',
                left: '44%'
              }
            },
            {
              identifier: 'three',
              model: '',
              position: {
                top: '37.6%',
                left: '80.4%',
                width: '8.6%',
                height: '5.1%'
              },
              answerTrue: {
                top: '7%',
                left: '44%'
              },
              answerFalse: {
                top: '50%',
                left: '44%'
              }
            },
            {
              identifier: 'four',
              model: '',
              position: {
                top: '57.6%',
                left: '11.2%',
                width: '8.6%',
                height: '5.1%'
              },
              answerTrue: {
                top: '7%',
                left: '44%'
              },
              answerFalse: {
                top: '50%',
                left: '44%'
              }
            },
            {
              identifier: 'five',
              model: '',
              position: {
                top: '49.8%',
                left: '39%',
                width: '8.6%',
                height: '5.1%'
              },
              answerFalse: {
                top: '7%',
                left: '44%'
              },
              answerTrue: {
                top: '50%',
                left: '44%'
              }
            },
            {
              identifier: 'six',
              model: '',
              position: {
                top: '60.1%',
                left: '77.2%',
                width: '8.6%',
                height: '5.1%'
              },
              answerTrue: {
                top: '7%',
                left: '44%'
              },
              answerFalse: {
                top: '50%',
                left: '44%'
              }
            }
          ]
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
    '65': {
      exercise: [
        {
          type: 'typer',
          title: 'Ergänze!',
          image: 'pg65ex3',
          trigger: {
            button: {
              top: '7%'
            },
            zone: {
              top: '7%',
              bottom: '3%'
            }
          },
          help: {
            toggle: false,
            text: 'Completeaza unde poti cumpara produsele. Cand ai terminat apasa pe cheita si verification Succes!'
          },
          data: [
            {
              identifier: 'one',
              position: {
                top: '14.4%',
                left: '72%',
                width: '22%'
              },
              model: '',
              solution: 'Bäckerei.'
            },
            {
              identifier: 'two',
              position: {
                top: '28.8%',
                left: '69%',
                width: '27%'
              },
              model: '',
              solution: 'Bekleidungsgeschäft.'
            },
            {
              identifier: 'three',
              position: {
                top: '43.5%',
                left: '65%',
                width: '30%'
              },
              model: '',
              solution: 'Im Spielwarengeschäft.'
            },
            {
              identifier: 'four',
              position: {
                top: '58%',
                left: '65%',
                width: '30%'
              },
              model: '',
              solution: 'In der Drogerie.'
            },
            {
              identifier: 'five',
              position: {
                top: '72.6%',
                left: '65%',
                width: '30%'
              },
              model: '',
              solution: 'In der Tierhandlung.'
            },
            {
              identifier: 'six',
              position: {
                top: '87.2%',
                left: '65%',
                width: '30%'
              },
              model: '',
              solution: 'In der Buchhandlung.'
            }
          ]
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
    '71': {
      exercise: [
        {
          type: 'typer',
          title: 'Schreib die Wörter und verbinde!',
          image: 'pg71ex3',
          trigger: {
            button: {
              top: '39%'
            },
            zone: {
              top: '39%',
              bottom: '32%'
            }
          },
          help: {
            toggle: false,
            text: 'Scrie cuvintele corect si uneste-le cu imaginile. Cand ai terminat apasa pe cheita si verification Succes!'
          },
          data: [
            {
              identifier: 'one',
              position: {
                top: '38.5%',
                left: '39%',
                width: '24%'
              },
              model: '',
              solution: 'ERDKUNDE'
            },
            {
              identifier: 'two',
              position: {
                top: '43.1%',
                left: '39%',
                width: '24%'
              },
              model: '',
              solution: 'INFORMATIK'
            },
            {
              identifier: 'three',
              position: {
                top: '47.2%',
                left: '39%',
                width: '24%'
              },
              model: '',
              solution: 'GESCHICHTE'
            },
            {
              identifier: 'four',
              position: {
                top: '51.2%',
                left: '39%',
                width: '24%'
              },
              model: '',
              solution: 'MUSIK'
            },
            {
              identifier: 'five',
              position: {
                top: '55.1%',
                left: '39%',
                width: '24%'
              },
              model: '',
              solution: 'BIOLOGIE'
            },
            {
              identifier: 'six',
              position: {
                top: '59.2%',
                left: '39%',
                width: '24%'
              },
              model: '',
              solution: 'DEUTSCH'
            }
          ]
        },
        {
          type: 'typer',
          title: 'Schreib die Sätze in der richtigen Reihenfolge!',
          image: 'pg71ex4',
          trigger: {
            button: {
              top: '68%'
            },
            zone: {
              top: '68%',
              bottom: '5%'
            }
          },
          help: {
            toggle: false,
            text: 'Scrie propozitiile punand cuvintele in ordinea corecta. Cand ai terminat apasa pe cheita si verification Succes!'
          },
          data: [
            {
              identifier: 'one',
              position: {
                top: '42.2%',
                left: '13%',
                width: '42%'
              },
              model: '',
              solution: 'Was ist Pauls Lieblingsfach?'
            },
            {
              identifier: 'two',
              position: {
                top: '47.4%',
                left: '13%',
                width: '62%'
              },
              model: '',
              solution: 'Am Freitag habe ich Geschichte und Mathe.'
            },
            {
              identifier: 'three',
              position: {
                top: '52.6%',
                left: '13%',
                width: '74%'
              },
              model: '',
              solution: 'Musik ist mein Lieblingsfach, ich bin sehr gut in Musik.'
            },
            {
              identifier: 'four',
              position: {
                top: '57.7%',
                left: '13%',
                width: '54%'
              },
              model: '',
              solution: 'Dienstag haben wir die Deutscharbeit.'
            }
          ]
        }
      ]
    },
    '73': {
      exercise: [
        {
          type: 'checker',
          title: 'Kreuze die richtigen Sätze an!',
          image: 'pg73ex8',
          trigger: {
            button: {
              top: '9%'
            },
            zone: {
              top: '9%',
              bottom: '24%'
            }
          },
          help: {
            toggle: false,
            text: 'Bifeaza propozitiile corecte. Cand ai terminat apasa pe cheita si verification Succes!'
          },
          data: [
            {
              identifier: 'one',
              model: '',
              position: {
                top: '20.6%',
                left: '13.4%',
                width: '3.3%',
                height: '5.5%'
              },
              answerFalse: {
                top: '4%',
                left: '7%'
              },
              answerTrue: {
                top: '55%',
                left: '7%'
              }
            },
            {
              identifier: 'two',
              model: '',
              position: {
                top: '27.3%',
                left: '13.4%',
                width: '3.3%',
                height: '5.5%'
              },
              answerTrue: {
                top: '4%',
                left: '7%'
              },
              answerFalse: {
                top: '55%',
                left: '7%'
              }
            },
            {
              identifier: 'three',
              model: '',
              position: {
                top: '34.1%',
                left: '13.4%',
                width: '3.3%',
                height: '5.5%'
              },
              answerFalse: {
                top: '4%',
                left: '7%'
              },
              answerTrue: {
                top: '55%',
                left: '7%'
              }
            },
            {
              identifier: 'four',
              model: '',
              position: {
                top: '40.8%',
                left: '13.4%',
                width: '3.3%',
                height: '5.5%'
              },
              answerFalse: {
                top: '4%',
                left: '7%'
              },
              answerTrue: {
                top: '55%',
                left: '7%'
              }
            },
            {
              identifier: 'five',
              model: '',
              position: {
                top: '47.6%',
                left: '13.4%',
                width: '3.3%',
                height: '5.5%'
              },
              answerTrue: {
                top: '4%',
                left: '7%'
              },
              answerFalse: {
                top: '55%',
                left: '7%'
              }
            },
            {
              identifier: 'six',
              model: '',
              position: {
                top: '54.3%',
                left: '13.4%',
                width: '3.3%',
                height: '5.5%'
              },
              answerTrue: {
                top: '4%',
                left: '7%'
              },
              answerFalse: {
                top: '55%',
                left: '7%'
              }
            },
            {
              identifier: 'seven',
              model: '',
              position: {
                top: '61.1%',
                left: '13.4%',
                width: '3.3%',
                height: '5.5%'
              },
              answerFalse: {
                top: '4%',
                left: '7%'
              },
              answerTrue: {
                top: '55%',
                left: '7%'
              }
            },
            {
              identifier: 'eight',
              model: '',
              position: {
                top: '67.8%',
                left: '13.4%',
                width: '3.3%',
                height: '5.5%'
              },
              answerTrue: {
                top: '4%',
                left: '7%'
              },
              answerFalse: {
                top: '55%',
                left: '7%'
              }
            },
            {
              identifier: 'nine',
              model: '',
              position: {
                top: '74.6%',
                left: '13.4%',
                width: '3.3%',
                height: '5.5%'
              },
              answerFalse: {
                top: '4%',
                left: '7%'
              },
              answerTrue: {
                top: '55%',
                left: '7%'
              }
            }
          ]
        }
      ]
    },
    '74': {
      exercise: [
        {
          type: 'type',
          title: 'Schreib die Namen der Geschäfte ins Kreuzworträtsel!',
          image: 'pg74ex11',
          trigger: {
            button: {
              top: '59%'
            },
            zone: {
              top: '59%',
              bottom: '3%'
            }
          },
          help: {
            toggle: false,
            text: 'Scrie numele magazinelor. Cand ai terminat apasa pe cheita si verification Succes!'
          },
          data: [
            {
              identifier: 'one',
              position: {
                top: '35.2%',
                left: '40.5%',
                width: '2.4%',
                height: '1.8%'
              },
              model: '',
              solution: 's'
            },
            {
              identifier: 'two',
              position: {
                top: '36.9%',
                left: '40.5%',
                width: '2.4%',
                height: '1.8%'
              },
              model: '',
              solution: 'p'
            },
            {
              identifier: 'three',
              position: {
                top: '38.6%',
                left: '40.5%',
                width: '2.4%',
                height: '1.8%'
              },
              model: '',
              solution: 'i'
            },
            {
              identifier: 'four',
              position: {
                top: '40.4%',
                left: '40.5%',
                width: '2.4%',
                height: '1.8%'
              },
              model: '',
              solution: 'e'
            },
            {
              identifier: 'five',
              position: {
                top: '42.1%',
                left: '40.5%',
                width: '2.4%',
                height: '1.8%'
              },
              model: '',
              solution: 'l'
            },
            {
              identifier: 'six',
              position: {
                top: '43.9%',
                left: '40.5%',
                width: '2.4%',
                height: '1.8%'
              },
              model: '',
              solution: 'w'
            },
            {
              identifier: 'seven',
              position: {
                top: '45.6%',
                left: '40.5%',
                width: '2.4%',
                height: '1.8%'
              },
              model: '',
              solution: 'a'
            },
            {
              identifier: 'eight',
              position: {
                top: '47.2%',
                left: '40.5%',
                width: '2.4%',
                height: '1.8%'
              },
              model: '',
              solution: 'r'
            },
            {
              identifier: 'nine',
              position: {
                top: '49%',
                left: '40.5%',
                width: '2.4%',
                height: '1.8%'
              },
              model: '',
              solution: 'e'
            },
            {
              identifier: 'ten',
              position: {
                top: '50.7%',
                left: '40.5%',
                width: '2.4%',
                height: '1.8%'
              },
              model: '',
              solution: 'n'
            },
            {
              identifier: 'eleven',
              position: {
                top: '52.4%',
                left: '40.5%',
                width: '2.4%',
                height: '1.8%'
              },
              model: '',
              solution: 'g'
            },
            {
              identifier: 'twelve',
              position: {
                top: '54.1%',
                left: '40.5%',
                width: '2.4%',
                height: '1.8%'
              },
              model: '',
              solution: 'e'
            },
            {
              identifier: 'thirteen',
              position: {
                top: '55.8%',
                left: '40.5%',
                width: '2.4%',
                height: '1.8%'
              },
              model: '',
              solution: 's'
            },
            {
              identifier: 'fourteen',
              position: {
                top: '57.6%',
                left: '40.5%',
                width: '2.4%',
                height: '1.8%'
              },
              model: '',
              solution: 'c'
            },
            {
              identifier: 'fifteen',
              position: {
                top: '59.3%',
                left: '40.5%',
                width: '2.4%',
                height: '1.8%'
              },
              model: '',
              solution: 'h'
            },
            {
              identifier: 'sixteen',
              position: {
                top: '61%',
                left: '40.5%',
                width: '2.4%',
                height: '1.8%'
              },
              model: '',
              solution: 'ä'
            },
            {
              identifier: 'seventeen',
              position: {
                top: '62.7%',
                left: '40.5%',
                width: '2.4%',
                height: '1.8%'
              },
              model: '',
              solution: 'f'
            },
            {
              identifier: 'eighteen',
              position: {
                top: '64.5%',
                left: '40.5%',
                width: '2.4%',
                height: '1.8%'
              },
              model: '',
              solution: 't'
            },
            {
              identifier: 'nineteen',
              position: {
                top: '35.2%',
                left: '12.2%',
                width: '2.4%',
                height: '1.8%'
              },
              model: '',
              solution: 'b'
            },
            {
              identifier: 'twenty',
              position: {
                top: '35.2%',
                left: '14.4%',
                width: '2.4%',
                height: '1.8%'
              },
              model: '',
              solution: 'e'
            },
            {
              identifier: 'twentyone',
              position: {
                top: '35.2%',
                left: '16.6%',
                width: '2.4%',
                height: '1.8%'
              },
              model: '',
              solution: 'k'
            },
            {
              identifier: 'twentytwo',
              position: {
                top: '35.2%',
                left: '18.6%',
                width: '2.4%',
                height: '1.8%'
              },
              model: '',
              solution: 'l'
            },
            {
              identifier: 'twentythree',
              position: {
                top: '35.2%',
                left: '20.8%',
                width: '2.4%',
                height: '1.8%'
              },
              model: '',
              solution: 'e'
            },
            {
              identifier: 'twentyfour',
              position: {
                top: '35.2%',
                left: '23.1%',
                width: '2.4%',
                height: '1.8%'
              },
              model: '',
              solution: 'i'
            },
            {
              identifier: 'twentyfive',
              position: {
                top: '35.2%',
                left: '25.3%',
                width: '2.4%',
                height: '1.8%'
              },
              model: '',
              solution: 'd'
            },
            {
              identifier: 'twentysix',
              position: {
                top: '35.2%',
                left: '27.4%',
                width: '2.4%',
                height: '1.8%'
              },
              model: '',
              solution: 'u'
            },
            {
              identifier: 'twentyseven',
              position: {
                top: '35.2%',
                left: '29.6%',
                width: '2.4%',
                height: '1.8%'
              },
              model: '',
              solution: 'n'
            },
            {
              identifier: 'twentyeight',
              position: {
                top: '35.2%',
                left: '31.7%',
                width: '2.4%',
                height: '1.8%'
              },
              model: '',
              solution: 'g'
            },
            {
              identifier: 'twentynine',
              position: {
                top: '35.2%',
                left: '33.9%',
                width: '2.4%',
                height: '1.8%'
              },
              model: '',
              solution: 's'
            },
            {
              identifier: 'thirty',
              position: {
                top: '35.2%',
                left: '36.1%',
                width: '2.4%',
                height: '1.8%'
              },
              model: '',
              solution: 'g'
            },
            {
              identifier: 'thirtyone',
              position: {
                top: '35.2%',
                left: '38.2%',
                width: '2.4%',
                height: '1.8%'
              },
              model: '',
              solution: 'e'
            },
            {
              identifier: 'thirtytwo',
              position: {
                top: '35.2%',
                left: '42.6%',
                width: '2.4%',
                height: '1.8%'
              },
              model: '',
              solution: 'c'
            },
            {
              identifier: 'thirtythree',
              position: {
                top: '35.2%',
                left: '44.8%',
                width: '2.4%',
                height: '1.8%'
              },
              model: '',
              solution: 'h'
            },
            {
              identifier: 'thirtyfour',
              position: {
                top: '35.2%',
                left: '46.9%',
                width: '2.4%',
                height: '1.8%'
              },
              model: '',
              solution: 'ä'
            },
            {
              identifier: 'thirtyfive',
              position: {
                top: '35.2%',
                left: '49.2%',
                width: '2.4%',
                height: '1.8%'
              },
              model: '',
              solution: 'f'
            },
            {
              identifier: 'thirtysix',
              position: {
                top: '35.2%',
                left: '51.2%',
                width: '2.4%',
                height: '1.8%'
              },
              model: '',
              solution: 't'
            },
            {
              identifier: 'thirtyseven',
              position: {
                top: '40.4%',
                left: '25.3%',
                width: '2.4%',
                height: '1.8%'
              },
              model: '',
              solution: 'd'
            },
            {
              identifier: 'thirtyeight',
              position: {
                top: '40.4%',
                left: '27.5%',
                width: '2.4%',
                height: '1.8%'
              },
              model: '',
              solution: 'r'
            },
            {
              identifier: 'thirtynine',
              position: {
                top: '40.4%',
                left: '29.6%',
                width: '2.4%',
                height: '1.8%'
              },
              model: '',
              solution: 'o'
            },
            {
              identifier: 'fourty',
              position: {
                top: '40.4%',
                left: '31.7%',
                width: '2.4%',
                height: '1.8%'
              },
              model: '',
              solution: 'g'
            },
            {
              identifier: 'fourtyone',
              position: {
                top: '40.4%',
                left: '33.8%',
                width: '2.4%',
                height: '1.8%'
              },
              model: '',
              solution: 'e'
            },
            {
              identifier: 'fourtytwo',
              position: {
                top: '40.4%',
                left: '36.1%',
                width: '2.4%',
                height: '1.8%'
              },
              model: '',
              solution: 'r'
            },
            {
              identifier: 'fourtythree',
              position: {
                top: '40.4%',
                left: '38.3%',
                width: '2.4%',
                height: '1.8%'
              },
              model: '',
              solution: 'i'
            },
            {
              identifier: 'fourtyfour',
              position: {
                top: '47.2%',
                left: '29.6%',
                width: '2.4%',
                height: '1.8%'
              },
              model: '',
              solution: 'b'
            },
            {
              identifier: 'fourtyfive',
              position: {
                top: '47.2%',
                left: '31.8%',
                width: '2.4%',
                height: '1.8%'
              },
              model: '',
              solution: 'a'
            },
            {
              identifier: 'fourtysix',
              position: {
                top: '47.2%',
                left: '33.9%',
                width: '2.4%',
                height: '1.8%'
              },
              model: '',
              solution: 'c'
            },
            {
              identifier: 'fourtyseven',
              position: {
                top: '47.2%',
                left: '36.1%',
                width: '2.4%',
                height: '1.8%'
              },
              model: '',
              solution: 'k'
            },
            {
              identifier: 'fourtyeight',
              position: {
                top: '47.2%',
                left: '38.2%',
                width: '2.4%',
                height: '1.8%'
              },
              model: '',
              solution: 'e'
            },
            {
              identifier: 'fourtynine',
              position: {
                top: '47.2%',
                left: '42.5%',
                width: '2.4%',
                height: '1.8%'
              },
              model: '',
              solution: 'e'
            },
            {
              identifier: 'fifty',
              position: {
                top: '47.2%',
                left: '44.8%',
                width: '2.4%',
                height: '1.8%'
              },
              model: '',
              solution: 'i'
            },
            {
              identifier: 'fiftyone',
              position: {
                top: '59.3%',
                left: '31.8%',
                width: '2.4%',
                height: '1.8%'
              },
              model: '',
              solution: 't'
            },
            {
              identifier: 'fiftytwo',
              position: {
                top: '59.3%',
                left: '33.9%',
                width: '2.4%',
                height: '1.8%'
              },
              model: '',
              solution: 'i'
            },
            {
              identifier: 'fiftythree',
              position: {
                top: '59.3%',
                left: '36.1%',
                width: '2.4%',
                height: '1.8%'
              },
              model: '',
              solution: 'e'
            },
            {
              identifier: 'fiftyfour',
              position: {
                top: '59.3%',
                left: '38.3%',
                width: '2.4%',
                height: '1.8%'
              },
              model: '',
              solution: 'r'
            },
            {
              identifier: 'fiftyfive',
              position: {
                top: '59.3%',
                left: '42.5%',
                width: '2.4%',
                height: '1.8%'
              },
              model: '',
              solution: 'a'
            },
            {
              identifier: 'fiftysix',
              position: {
                top: '59.3%',
                left: '44.8%',
                width: '2.4%',
                height: '1.8%'
              },
              model: '',
              solution: 'n'
            },
            {
              identifier: 'fiftyseven',
              position: {
                top: '59.3%',
                left: '47%',
                width: '2.4%',
                height: '1.8%'
              },
              model: '',
              solution: 'd'
            },
            {
              identifier: 'fiftyeight',
              position: {
                top: '59.3%',
                left: '49.1%',
                width: '2.4%',
                height: '1.8%'
              },
              model: '',
              solution: 'l'
            },
            {
              identifier: 'fiftynine',
              position: {
                top: '59.3%',
                left: '51.3%',
                width: '2.4%',
                height: '1.8%'
              },
              model: '',
              solution: 'u'
            },
            {
              identifier: 'sixty',
              position: {
                top: '59.3%',
                left: '53.5%',
                width: '2.4%',
                height: '1.8%'
              },
              model: '',
              solution: 'n'
            },
            {
              identifier: 'sixtyone',
              position: {
                top: '59.3%',
                left: '55.6%',
                width: '2.4%',
                height: '1.8%'
              },
              model: '',
              solution: 'g'
            },
            {
              identifier: 'sixtytwo',
              position: {
                top: '45.5%',
                left: '49.1%',
                width: '2.4%',
                height: '1.8%'
              },
              model: '',
              solution: 'b'
            },
            {
              identifier: 'sixtythree',
              position: {
                top: '61%',
                left: '49.1%',
                width: '2.4%',
                height: '1.8%'
              },
              model: '',
              solution: 'u'
            },
            {
              identifier: 'sixtyfour',
              position: {
                top: '62.7%',
                left: '49.1%',
                width: '2.4%',
                height: '1.8%'
              },
              model: '',
              solution: 'n'
            },
            {
              identifier: 'sixtyfive',
              position: {
                top: '64.4%',
                left: '49.1%',
                width: '2.4%',
                height: '1.8%'
              },
              model: '',
              solution: 'g'
            },
            {
              identifier: 'sixtysix',
              position: {
                top: '47.2%',
                left: '49.1%',
                width: '2.4%',
                height: '1.8%'
              },
              model: '',
              solution: 'u'
            },
            {
              identifier: 'sixtyseven',
              position: {
                top: '49%',
                left: '49.1%',
                width: '2.4%',
                height: '1.8%'
              },
              model: '',
              solution: 'c'
            },
            {
              identifier: 'sixtyeight',
              position: {
                top: '50.6%',
                left: '49.1%',
                width: '2.4%',
                height: '1.8%'
              },
              model: '',
              solution: 'h'
            },
            {
              identifier: 'sixtynine',
              position: {
                top: '52.4%',
                left: '49.1%',
                width: '2.4%',
                height: '1.8%'
              },
              model: '',
              solution: 'h'
            },
            {
              identifier: 'seventy',
              position: {
                top: '54.1%',
                left: '49.1%',
                width: '2.4%',
                height: '1.8%'
              },
              model: '',
              solution: 'a'
            },
            {
              identifier: 'seventyone',
              position: {
                top: '55.8%',
                left: '49.1%',
                width: '2.4%',
                height: '1.8%'
              },
              model: '',
              solution: 'n'
            },
            {
              identifier: 'seventytwo',
              position: {
                top: '57.6%',
                left: '49.1%',
                width: '2.4%',
                height: '1.8%'
              },
              model: '',
              solution: 'd'
            }
          ]
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
