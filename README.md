# Sell Used Books Website

- `backend/`: NestJS API.
- `frontend/`: React application.

## Các nhánh Git

- `main`: nhánh ổn định, mặc định trên GitHub. Thay đổi phải qua Pull Request (PR); chặn force push và xóa nhánh, áp dụng cả với quản trị viên.
- `demo_git`: nhánh phát triển. Code, commit và push hằng ngày trên nhánh này.

Cả backend và frontend dùng chung repository. Không chạy `git init` trong các thư mục con.

## Lưu thay đổi hằng ngày

Mở folder `Sell_Used_Books` trong VS Code. Kiểm tra góc dưới bên trái đang ở `demo_git`.

```sh
git switch demo_git
git pull --ff-only origin demo_git
# Sửa code, sau đó:
git status
git add backend/ frontend/ README.md .gitignore
git commit -m "Mô tả thay đổi"
git push
```

Trong Source Control, có thể chọn dấu `+` ở từng file, nhập Message, bấm Commit rồi Push. Push trên `demo_git` chưa cập nhật `main`.

## Đưa code ổn định vào main

1. Push các commit lên `demo_git`.
2. Trên GitHub, mở Pull requests → New pull request.
3. Chọn **base: main**, **compare: demo_git** và tạo PR.
4. Xem Files changed và kiểm tra chức năng đã sửa. Hiện chưa có kiểm thử tự động bắt buộc.
5. Chọn **Create a merge commit**, rồi **Confirm merge**. Bạn được tự merge, không cần người khác phê duyệt.
6. Giữ nhánh `demo_git`; không chọn Delete branch.

Sau khi merge, đồng bộ nhánh phát triển trước khi tiếp tục code:

```sh
git switch demo_git
git fetch origin
git merge origin/main
git push
```

Nếu Git báo xung đột, giải quyết các file xung đột trong VS Code, stage và hoàn tất merge commit trước khi push. Không dùng force push để vượt lỗi.

Quy tắc bảo vệ hạn chế cập nhật nhầm; không tự đảm bảo code không có lỗi. Luôn xem diff và kiểm tra chức năng trước khi merge PR.
