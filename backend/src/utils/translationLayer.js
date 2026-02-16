/**
 * Translates V1 User data (name) to V2 User data (firstName, lastName)
 * @param {Object} v1Body - The body of a V1 request
 * @returns {Object} v2Body - The body compatible with V2
 */
export const translateV1ToV2 = (v1Body) => {
  const { name, email } = v1Body;
  
  if (!name) {
    return { firstName: "", lastName: "", email };
  }

  const nameParts = name.trim().split(" ");
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(" ") || ""; // Handle case with single name

  return {
    firstName,
    lastName,
    email
  };
};

/**
 * Middleware adapter to use V2 controller for V1 route (Experimental/Optional)
 * This allows V1 endpoints to use V2 logic by translating the request first.
 */
export const v1ToV2Adapter = (req, res, next) => {
    if (req.body && req.body.name) {
        req.body = translateV1ToV2(req.body);
    }
    next();
};
