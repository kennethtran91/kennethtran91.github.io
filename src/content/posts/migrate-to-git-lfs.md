---
author: bobby
publishedAt: 2024-02-29T10:55:19Z
title: Cài đặt Git LFS cho repo của bạn
description: repo của bạn khá nặng nề do có quá nhiều các file media?
isPublish: true
---

## Tìm hiểu về git LFS

Git LFS (large file storage) là một bản mở rộng của git. Git LFS giúp chúng ta tối ưu dung lượng của 1 repository khi clone, pull và checkout bằng việc thay thế các file Media (hình ảnh, video, ...) thành chuỗi text dc trỏ lên server và lưu với một cách thức khác với thông thường.

Team mình chủ yếu làm nặng về documentation, front-end, nên hình ảnh chiếm rất nhiều trong repo, mỗi lần build, hay checkout tốn khá nhiều thời gian. Sau khi tìm tòi thì thấy git lfs là một giải pháp khá hay mà còn open-source nữa thì dại gì ko thử.

> Git LFS được xây dựng trên kỹ thuật Lazyload (Cần thì lấy), vì thế mà khi clone, pull hay checkout source về sẽ rất nhanh và chúng ta có thể tải về các file lớn sau cũng được. (Nguồn: thienanblog)

## Cài đặt git LFS

Do team mình đã có sẵn file và hình ảnh trong repo, nên mình chỉ tập trung vào việc migrate git lfs vào thôi.

 * Yêu cầu:
    - Install `git lfs`
    - Nếu bạn xài macOs, run this command `brew install git-lfs`
    - Nếu bạn xài Windows, thì git lfs có thể đã dc cài sẵn trong bộ cài [Git for Windows](https://gitforwindows.org/).
    - Sau khi cài git lfs như trên, bạn cần run `git lfs install` để setup git hooks cho repo của bạn.


## Di chuyển các file lớn qua git LFS

- Để git LFS bắt đầu track các files media có dung lượng lớn bằng cách chạy lệnh sau

    `git lfs migrate import --include="*.png, *.jpg" --everything`

- Sử dụng lệnh dưới để kiếm tra tất cả các file đã dc track

    `git lfs ls-files # list LFS files`

- Sau khi hoàn tất, push lên remote
    `git push --all --force # force push all branches to remote`

Sau khi làm những bước trên, bạn đã migrate toàn bộ file có đuôi png, jpg vào Git LFS. `--everything` flag sẽ chạy migration ở tất cả local, remote git refs (branches, tags). Bạn cũng sẽ có thêm 1 file .gitattributes (nếu repo chưa có) để git có thể dựa vào đó mà track những file có đuôi png, jpg ...

Nếu bạn chỉ muốn test trên 1 branch thôi thì có thể dùng `--include-ref=branch-name`. 