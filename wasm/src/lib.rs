use wasm_bindgen::{prelude::wasm_bindgen, JsValue};

#[wasm_bindgen]
pub async fn hello() -> Result<JsValue, JsValue> {
    log::debug!("helloooo");
    Ok(JsValue::from_str("helloooo"))
}
