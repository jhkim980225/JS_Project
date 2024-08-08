// let promise = fetch(url, [options])

// let url = 'https://api.github.com/repos/javascript-tutorial/ko.javascript.info/commits';
// fetch(url)
// .then(response => response.json)
// .then(commits => alert(commits[0].author.login));

let url = "https://jsonplaceholder.typicode.com/posts" 

fetch(url)
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json(); // JSON 응답을 반환 (a)
})
.then(data => { // (a) 연결
  populateTable(data); // 데이터를 테이블에 삽입
})
.catch(error => {
  console.error('There was a problem with the fetch operation:', error); // 오류 처리
});


/* fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // JSON 응답을 반환
  })
  .then(data => {
    console.log(data); // 데이터를 콘솔에 출력
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error); // 오류 처리
  }); */

  function populateTable(data) {
    const tableBody = document.getElementById("table-body");
    
    // 데이터 배열의 각 항목을 테이블 행으로 변환
    data.forEach(item => {
      const row = document.createElement("tr");

      const userIdCell = document.createElement("td");
      userIdCell.textContent = item.userId;      
      row.appendChild(userIdCell);
      
      const idCell = document.createElement("td");
      idCell.textContent = item.id;
      row.appendChild(idCell);

      const titleCell = document.createElement("td");
      titleCell.textContent = item.title;
      row.appendChild(titleCell);

      const bodyCell = document.createElement("td");
      bodyCell.textContent = item.body;
      row.appendChild(bodyCell);

      tableBody.appendChild(row);
    });
  }



document.getElementById('postForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const title = document.getElementById('title').value;
  const body = document.getElementById('body').value;
  const userId = document.getElementById('userId').value;

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: title,       // 폼에서 입력한 제목
      body: body,         // 폼에서 입력한 내용
      userId: userId,     // 폼에서 입력한 사용자 ID
    }),
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    document.getElementById('response').textContent = JSON.stringify(data, null, 2);
  })
  .catch(error => {
    console.error('Error:', error);
    document.getElementById('response').textContent = 'Error: ' + error;
  });
});