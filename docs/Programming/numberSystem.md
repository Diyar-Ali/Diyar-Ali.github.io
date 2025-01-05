Number systems are ways to represent numbers using a set of symbols (digits). The base (or radix) of a number system determines the number of unique digits it uses. Let’s explore the four main number systems: **binary**, **octal**, **decimal**, and **hexadecimal**, with examples.

---

### **1. Binary (Base-2)**
- **Definition**: Binary uses only two digits: `0` and `1`. It’s the fundamental language of computers because it maps directly to electrical states (on/off).
- **Example**:  
  The word **RED** can be represented in binary using ASCII codes:  
  - **R**: `01010010`  
  - **E**: `01000101`  
  - **D**: `01000100`

- **Number Example**:
  Binary `1010` → Decimal `10`

- **Usage**: Data representation in computers (bits and bytes).

---

### **2. Octal (Base-8)**
- **Definition**: Octal uses eight digits: `0` to `7`. It’s often used as a shorthand for binary because each octal digit represents three binary digits (bits).  
  For example:  
  Binary `111` → Octal `7`

- **Example**:  
  - Let’s say we assign octal values to the word **RED** (using the same ASCII codes, converted from binary to octal):
    - **R**: Binary `01010010` → Octal `122`
    - **E**: Binary `01000101` → Octal `105`
    - **D**: Binary `01000100` → Octal `104`

- **Fitting Usage Example**:  
  File permissions in Linux use octal numbers:
  - `777` means full read/write/execute access for all (owner, group, others).

---

### **3. Decimal (Base-10)**
- **Definition**: Decimal is the standard number system we use daily, based on ten digits: `0` to `9`. It’s intuitive because humans naturally count in tens (10 fingers).

- **Example**:  
  Let’s represent **RED** as decimal values based on ASCII codes:
  - **R**: Decimal `82`
  - **E**: Decimal `69`
  - **D**: Decimal `68`

- **Fitting Usage Example**:  
  - A person's age: Decimal `25` means "twenty-five years old."
  - Temperature: `35°C`.

---

### **4. Hexadecimal (Base-16)**
- **Definition**: Hexadecimal uses 16 digits: `0` to `9` and `A` to `F` (where `A = 10`, `B = 11`, ..., `F = 15`). It’s often used in programming and web development because it’s a compact way to represent binary data (4 bits per hex digit).

- **Example**:  
  Let’s represent **RED** as hexadecimal values:
  - **R**: Decimal `82` → Hexadecimal `52`
  - **E**: Decimal `69` → Hexadecimal `45`
  - **D**: Decimal `68` → Hexadecimal `44`

- **Web Development Example (Red #ff0000)**:
  - **Hexadecimal in Colors**: In web design, colors are defined using hex codes in the format `#RRGGBB`, where:
    - `RR` = Red intensity
    - `GG` = Green intensity
    - `BB` = Blue intensity
  - For **Red**: `#ff0000`
    - `ff` → Maximum red intensity (255 in decimal).
    - `00` → No green.
    - `00` → No blue.

---

### **Summary Table**

| Number System | Base | Digits Used          | Example                      |
|---------------|------|----------------------|------------------------------|
| Binary        | 2    | `0, 1`              | `1010` → Decimal `10`        |
| Octal         | 8    | `0, 1, ..., 7`      | `777` → Full file permissions|
| Decimal       | 10   | `0, 1, ..., 9`      | Age: `25 years`              |
| Hexadecimal   | 16   | `0, 1, ..., 9, A-F` | Color: Red `#ff0000`         |

Each system is suited for different tasks, with binary for machines, decimal for humans, octal for file permissions, and hexadecimal for compact representation in programming.