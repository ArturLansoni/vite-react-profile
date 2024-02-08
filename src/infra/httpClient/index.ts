async function httpGET<T = any>(url: string): Promise<T | undefined> {
  try {
    const response = await fetch(url, {
      method: "GET",
    });

    return (await response.json()) as T;
  } catch {
    return;
  }
}

export { httpGET };
