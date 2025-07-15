---
author: bobby
pubDatetime: 2024-07-15T10:17:19Z
title: Tăng sức mạnh cho VSCode
description: Chấn chỉnh lại thằng copilot bằng những hướng dẫn chi tiết
tags:
  - copilot
---

Công ty tôi dạo gần đây đã bỏ ra gần 5 củ khoai mỹ để mua subscription github copilot cho nhân viên mình sử dụng. Hic chỉ tiếc là không thể truy cập vào public code. Coi như tự đóng cổng dạy nhau học.

Sau khi sử dụng thằng copilot này 1 thời gian thì tui thấy nó hơi ngu lúc đầu, nếu chỉ sử dụng cho các task đơn giản như viết unit test, giải thích code, refactor code nho nhỏ thì ok, còn bảo nó sửa gì là một hồi nó chế tè le. Nên hôm nay tui share một setting nhỏ lụm dc trên reddit. Mục đích là để các câu trả lời từ copilot nhất quán hơn, bớt bợ đít và tập trung giải quyết vấn đề mình giao hơn là phăng code theo ý nó.

### settings.json

Mở settings.json trong vscode, và thêm đoạn này

```
"github.copilot.chat.codeGeneration.instructions": [
        {
            "text": "1. **Prioritize Minimal Impact:** Understand the code's architectural context (dependencies, assumptions, history) before modification. Aim for the smallest change that fulfills the requirement while preserving existing functionality and patterns. Avoid unnecessary refactoring."
        },
        {
            "text": "2. **Targeted Implementation:** Identify and modify only the essential code sections. Preserve unrelated code and maintain existing system behavior."
        },
        {
            "text": "3. **Graduated Change Strategy:** \n   - **Default:** Implement the minimal, focused change for the specific request.\n   - **If Necessary:** Offer moderate, localized refactoring.\n   - **Only if Explicitly Requested:** Perform comprehensive restructuring."
        },
        {
            "text": "4. **Clarify Ambiguity:** If the required scope is unclear, request clarification before proceeding. Do not assume a broader scope than specified."
        },
        {
            "text": "5. **Document Potential Enhancements:** Note related improvements outside the immediate scope without implementing them (e.g., 'Function Y uses a similar pattern and could benefit from this update later.')."
        },
        {
            "text": "6. **Ensure Reversibility:** Design changes to be easily revertible if they don't yield the intended outcome or introduce issues."
        },
        {
            "text": "7. **Adhere to Code Quality Standards:**\n   - **Clarity & Readability:** Use descriptive names; keep functions concise and single-purpose; follow style guides (e.g., PEP 8, Prettier).\n   - **Consistency:** Follow existing project patterns, conventions, and technology choices unless a change is justified.\n   - **Robust Error Handling:** Anticipate failures (I/O, network, input); use appropriate mechanisms (try-catch, specific exceptions); provide informative error messages.\n   - **Security:** Sanitize inputs; manage secrets securely (env vars/config tools); vet external libraries.\n   - **Testability:** Design for testability (e.g., dependency injection); ensure adequate test coverage.\n   - **Documentation:** Comment complex/non-obvious code; use standard formats (JSDoc, DocStrings)."
        },
        {
            "text": "8. **Conventional Commit Messages:** Generate commit messages following the Conventional Commits specification (e.g., `feat(api): add user endpoint`). Use imperative mood. Infer type (feat, fix, chore, refactor, test, docs) and scope from the changes."
        }
    ],
```

Nếu bạn thích sự chỉnh chu thì có thể soạn 1 file markdown trong `.github/copilot-instructions.md` và chia nhỏ các câu lệnh thành coding standards. (Tham khảo thêm ở đây: https://code.visualstudio.com/docs/copilot/copilot-customization)

Tui cũng mới sử dụng thử nên chưa biết nó ngon hơn ko, nhưng sau khi đọc lướt qua các instructions trên thì thấy nó cũng hợp lý!
