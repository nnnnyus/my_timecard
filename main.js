// すべてのbutton要素を取得
const saveBtn1 = document.querySelectorAll('.save_btn1');
const saveBtn2 = document.querySelectorAll('.save_btn2');
const saveBtn3 = document.querySelectorAll('.save_btn3');
const saveBtn4 = document.querySelectorAll('.save_btn4');

// 各ボタンにイベントを登録
saveBtn1.forEach((saveBtn) => {
    saveBtn.addEventListener('click', () => {
        const now = new Date();

        const nowYear = now.getFullYear();
        const nowMon = now.getMonth() + 1;
        const nowDate = now.getDate();
        const nowHour = now.getHours();
        const nowMinute = now.getMinutes();

        alert('出勤しました',`${nowYear}/${nowMon}/${nowDate} ${nowHour}:${nowMinute}`);

        // ボタンをクリックした時点の日時をコンソールに表示
        console.log('出勤',`${nowYear}/${nowMon}/${nowDate} ${nowHour}:${nowMinute}`);

    });
});


// 各ボタンにイベントを登録
saveBtn2.forEach((saveBtn) => {
    saveBtn.addEventListener('click', () => {
        const now = new Date();

        const nowYear = now.getFullYear();
        const nowMon = now.getMonth() + 1;
        const nowDate = now.getDate();
        const nowHour = now.getHours();
        const nowMinute = now.getMinutes();

        alert('休憩を開始しました',`${nowYear}/${nowMon}/${nowDate} ${nowHour}:${nowMinute}`);

        // ボタンをクリックした時点の日時をコンソールに表示
        console.log('休憩開始',`${nowYear}/${nowMon}/${nowDate} ${nowHour}:${nowMinute}`);
    });
});

// 各ボタンにイベントを登録
saveBtn3.forEach((saveBtn) => {
    saveBtn.addEventListener('click', () => {
        const now = new Date();

        const nowYear = now.getFullYear();
        const nowMon = now.getMonth() + 1;
        const nowDate = now.getDate();
        const nowHour = now.getHours();
        const nowMinute = now.getMinutes();

        alert('休憩を終了しました',`${nowYear}/${nowMon}/${nowDate} ${nowHour}:${nowMinute}`);

        // ボタンをクリックした時点の日時をコンソールに表示
        console.log('休憩終了',`${nowYear}/${nowMon}/${nowDate} ${nowHour}:${nowMinute}`);
    });
});

// 各ボタンにイベントを登録
saveBtn4.forEach((saveBtn) => {
    saveBtn.addEventListener('click', () => {
        const now = new Date();

        const nowYear = now.getFullYear();
        const nowMon = now.getMonth() + 1;
        const nowDate = now.getDate();
        const nowHour = now.getHours();
        const nowMinute = now.getMinutes();

        alert('退勤しました',`${nowYear}/${nowMon}/${nowDate} ${nowHour}:${nowMinute}`);

        // ボタンをクリックした時点の日時をコンソールに表示
        console.log('退勤',`${nowYear}/${nowMon}/${nowDate} ${nowHour}:${nowMinute}`);
    });
});