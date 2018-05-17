// import Parser from '../../app/model/parser.model';

const structure = {
  key: 'love-glasses',
  meta: {
    viewBox: [ 0, 0, 301.28, 112.68 ],
    width: '',
    height: '',
    class: ''
  },
  'glasses' : {
    key: 'glasses',
    tag: 'g',
    children: {
      'glass-part' : {
        tag: 'path',
        config: {
          d: 'M96.84,106.39l-39.23,-50.49a20.3,20.3,0,1,1,35.17,-20.3l4.07,7l4.07,-7a20.3,20.3,0,1,1,35.16,20.3z',
          class: 'cls-1'
        },
        siblings: [
          {
            d: "M204.44,106.39l-39.23,-50.49a20.3,20.3,0,1,1,35.16,-20.3l4.07,7l4.07,-7a20.3,20.3,0,1,1,35.16,20.3z"
          },
          {
            d: "M137.65,49.83a18.36,18.36,0,0,1,26,0",
            class: 'cls-2'
          },
          {
            d: "M6.16,22.4a11.53,11.53,0,0,1,-0.66,-16.24h0a11.53,11.53,0,0,1,16.24,-0.66l34.09,31.41",
            class: 'cls-3'
          },
          {
            d: "M295.12,22.4a11.53,11.53,0,0,0,0.66,-16.24h0a11.53,11.53,0,0,0,-16.24,-0.66l-34.09,31.41",
            class: 'cls-3'
          },
        ]
      }
    }
  }
};

// export default new Parser(structure);
