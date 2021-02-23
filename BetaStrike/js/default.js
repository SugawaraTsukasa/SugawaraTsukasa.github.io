let enemy = document.querySelector("#enemy-content");
let enemyHTML = "";
enemyHTML = '<div class="item img"><img src="img/enemy01.png" alt="戦車級"></div><div class="item enemy-text"><h3>戦車（タンク）級</h3><p>画面上方から真っ直ぐ進行してくる。簡単に倒せるが、その圧倒的な物量には注意が必要だ。<br>SCORE : +100</p></div>';
enemy.innerHTML = enemyHTML;

function enemyBtn01() {
  enemyHTML = '<div class="item img"><img src="img/enemy01.png" alt="戦車級"></div><div class="item enemy-text"><h3>戦車（タンク）級</h3><p>画面上方から真っ直ぐ進行してくる。簡単に倒せるが、その圧倒的な物量には注意が必要だ。<br>SCORE : +100</p></div>';
  enemy.innerHTML = enemyHTML;
}

function enemyBtn02() {
  enemyHTML = '<div class="item img"><img src="img/enemy02.png" alt="突撃級"></div><div class="item enemy-text"><h3>突撃（デストロイヤー）級</h3><p>縦一列に連続5体出現する。全て倒すと高得点だが、その非常に高い機動性には注意が必要だ。<br>SCORE : +300</p></div>';
  enemy.innerHTML = enemyHTML;
}

function enemyBtn03() {
  enemyHTML = '<div class="item img"><img src="img/enemy03.png" alt="要撃級"></div><div class="item enemy-text"><h3>要撃（グラップラー）級</h3><p>横一列に連続5体出現する。全て倒すと高得点だが、その前腕を使用した高い攻撃力には注意が必要だ。<br>SCORE : +500</p></div>';
  enemy.innerHTML = enemyHTML;
}

function enemyBtn04() {
  enemyHTML = '<div class="item img"><img src="img/enemy04.png" alt="要塞級"></div><div class="item enemy-text"><h3>要塞（フォート）級</h3><p>もっとも大型で最強の敵。画面中央上方から出現し、自機のX方向を探知して突撃してくる。倒すと高得点だが、ライフが存在するため倒すのには苦労するだろう。<br>SCORE : ヒット時 +100 , 撃破時 +5000</p></div>';
  enemy.innerHTML = enemyHTML;
}