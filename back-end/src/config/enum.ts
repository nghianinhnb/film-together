export enum RESULT {
    fail = 'fail',
    success = 'success',
}


export enum ERROR_VI {
    UNAUTHORIZED = 'Không có quyền truy nhập',
    PERMISISON_DENIED  = 'Không đủ quyền thực hiện chức năng này',
    MISSING_PARAMETERS = 'Không đủ tham số',
    INTERNAL_ERROR = 'Lỗi máy chủ',
    NOT_FOUND = 'Không tìm thấy thông tin',
    WRONG_PASSWORD = 'Sai tên đăng nhập hoặc mật khẩu',
    INVALID_STATE = 'Trạng thái không hợp lệ',
    NOT_VALID_PARAMETERS = 'Tham số không hợp lệ',
    ACCOUNT_EXISTS = 'Tài khoản đã tồn tại',
    WRONG_OLD_PASSWORD = 'Nhập sai mật khẩu hiện tại',
    INVALID_EMAIL = 'Email không hợp lệ',
}