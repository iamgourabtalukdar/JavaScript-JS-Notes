export function constructPayload(formData) {
  const payload = {
    address: {},
  };
  for (const [key, value] of formData) {
    if (["city", "country", "pin"].includes(key)) {
      if (value) {
        payload["address"][key] = value;
      }
    } else {
      payload[key] = value;
    }
  }
  return payload;
}
