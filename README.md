# Ứng dụng Quản lý Điểm Sinh viên

Bài tập: chia giao diện thành 3 component (App, StudentList, StudentItem), dùng ES6
(let/const, arrow function, destructuring, template literals, .map()) và React
(component, props, state).

## Cấu trúc

```
src/
  App.jsx          # Component cha - quản lý state (students, newName, newScore)
  StudentList.jsx  # Component con - nhận danh sách qua props, render bằng .map()
  StudentItem.jsx  # Component cháu - nhận {name, score} qua props, hiển thị 1 dòng
  main.jsx         # Điểm khởi chạy React
  index.css        # Giao diện
```

## Chạy thử

```bash
npm install
npm run dev
```

Mở http://localhost:5173

## Build

```bash
npm run build
npm run preview
```
