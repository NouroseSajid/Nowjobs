// src/utils/formHelpers.ts

/**
 * Basic email validation
 * @param email Email to validate
 * @returns Boolean indicating if email format is valid
 */
export const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  /**
   * Password validation - requires at least 8 characters
   * @param password Password to validate
   * @returns Boolean indicating if password meets requirements
   */
  export const isValidPassword = (password: string): boolean => {
    return password.length >= 8;
  };
  
  /**
   * Form field validation helper
   * @param fieldName Name of the field
   * @param value Field value
   * @param rules Validation rules to apply
   * @returns Error message or empty string if valid
   */
  export const validateField = (
    fieldName: string,
    value: string,
    rules: {
      required?: boolean;
      minLength?: number;
      maxLength?: number;
      isEmail?: boolean;
      isPassword?: boolean;
    }
  ): string => {
    if (rules.required && !value) {
      return `${fieldName} is required`;
    }
    
    if (rules.minLength && value.length < rules.minLength) {
      return `${fieldName} must be at least ${rules.minLength} characters`;
    }
    
    if (rules.maxLength && value.length > rules.maxLength) {
      return `${fieldName} must be less than ${rules.maxLength} characters`;
    }
    
    if (rules.isEmail && !isValidEmail(value)) {
      return `Please enter a valid email address`;
    }
    
    if (rules.isPassword && !isValidPassword(value)) {
      return `Password must be at least 8 characters`;
    }
    
    return '';
  };