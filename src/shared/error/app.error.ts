export const AppError={

    UNKNOWN_ERROR: {
        code: "ERR_UNKNOWN",
        message: "An unexpected error occurred.",
      },
    INVALID_UUID: {
        code: "ERR_INVALID_UUID",
        message: "The provided ID is not a valid UUID.",
      },
    UNAUTHORIZED: {
        code: "ERR_UNAUTHORIZED",
        message: "You are not authorized to perform this action.",
      },
    FORBIDDEN: {
        code: "ERR_FORBIDDEN",
        message: "Access to this resource is forbidden.",
      },
    NOT_FOUND: {
        code: "ERR_NOT_FOUND",
        message: "Resource not found.",
      },
    FOUND: {
        code: "ERR_FOUND",
        message: "Existing resource",
      },
    VALIDATION_ERROR: {
        code: "ERR_VALIDATION",
        message: "Validation failed for the input fields.",
      },
    FIELD_REQUIRED: {
        code: "ERR_FIELD_REQUIRED",
        message: "Field cannot be empty.",
      },
    CONTENT_TOO_SHORT: {
        code: "ERR_CONTENT_TOO_SHORT",
        message: "Content must have at least 10 characters.",
      },
    DELETE_FAILED: {
        code: "ERR_DELETE_FAILED",
        message: "Failed to delete the requested item.",
      },
    DELETE_FORBIDDEN_ACTIVE: {
        code: "ERR_DELETE_FORBIDDEN_ACTIVE",
        message: "Cannot delete an active item. Please deactivate it before deleting.",
      },
    TYPE_INVALID: {
        code: "ERR_INVALID_TYPE",
        message: "Content block type is not valid.",
      },
    DUPLICATE_FIELD: {
        code: "ERR_DUPLICATE_FIELD",
        message: "Field must be unique.",
      },
    SERVER_ERROR: {
        code: "ERR_SERVER_ERROR",
        message: "Server error",
      }
}