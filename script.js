// body �̔w�i�F��ς���
function MyFunction01() {
  var obj = document.body;
  obj.style.backgroundColor = 'red';
}
// ID�v�f�̔w�i�F��ς���
function MyFunction02(){
  var obj = document.getElementById('ID01');
  obj.style.backgroundColor = 'yellow';
}
// CLASS�v�f�̔w�i�F��ς���
function MyFunction03(){

    // Class01�̔c���i��� line[0], line[1] ,line[2]�E�E�Ɉꊇ�œ���j
    var lines = document.getElementsByClassName('Class01');

    //  i �Ԗڂ� p�^�O�����̔w�i�� green ��
    for( var i=0; i<lines.length; i++ ){
          lines[i].style.backgroundColor = 'green';
    }
}
// HTML�v�f�̔w�i�F��ς���
function MyFunction04() {
  // p�^�O�̔c���i�����̏�� obj[0], obj[1] ,obj[2]�E�E�Ɉꊇ�œ���j
  var obj = document.getElementsByTagName("p");  
 
  // p�^�O�̑��݂��鐔�������������肩����
  for( var i=0; i<obj.length; i++ ) { 
       //  i �Ԗڂ� p�^�O�����̔w�i�� blue ��
      obj[ i ].style.backgroundColor = "blue"; 
  }
}
// ������p�����w�i�F�̕ύX
function MyFunction05( col ){
  var obj = document.body;
  obj.style.backgroundColor = col;
}
//�����_����16�i6���̃J���[�R�[�h�𐶐��i�ėp���̂���֐��j
function RandomColor(){ 
    var col = Math.floor( Math.random() * 0xFFFFFF ).toString(16);
    for( var i = col.length; i<6; i++ ) { col = '0' + col; }
    return '#' + col;
}
// �w�i�F�̕ύX
function MyFunction06( ){  
  var obj = document.body;
  obj.style.backgroundColor = RandomColor();
}
// JavaScript Sample