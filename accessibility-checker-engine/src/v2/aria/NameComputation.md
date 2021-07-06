Tekst alternatywny dla danego elementu jest obliczany w następujący sposób:

1. **[!aria-labelledby]** Jeśli bieżący węzeł jest ukryty i nie ma do niego bezpośredniego odwołania przez aria-labelledby zwróci pusty łańcuch.

2. Jeśli bieżący węzeł posiada atrybut aria-labelledby, który zawiera co najmniej jeden poprawny IDREF, a bieżący węzeł nie jest jeszcze częścią sekwencji przeglądania aria-labelledby, przetwórz jego IDREFy w kolejności ich występowania:
    1. Ustaw zgromadzony tekst na pusty łańcuch.
    2. Dla każdego IDREF:
        1. Ustaw bieżący węzeł na węzeł, do którego odwołuje się IDREF.
        2. Oblicz tekst alternatywny dla bieżącego węzła **[aria-labelledby=true]**
        3. Dodaj wynik, ze spacją, do zgromadzonego tekstu.
    3. Zwróć skumulowany tekst.
	
3. if the current node has an aria-label attribute whose value is not the empty string, nor, when trimmed of white space, is not the empty string:
    * If traversal of the current node is due to recursion and the current node is an embedded control as defined in step 2E, ignore aria-label and skip to rule 2E.
    * Otherwise, return the value of aria-label.
4. Otherwise, if the current node's native markup provides an attribute (e.g. title) or element (e.g. HTML label) that defines a text alternative, return that alternative in the form of a flat string as defined by the host language, unless the element is marked as presentational (role="presentation"or role="none").
5. **[walk || aria-labelledby]** Otherwise, if the current node is a control embedded within the label (e.g. the label element in HTMLor any element directly referenced by aria-labelledby) for another widget, where the user can adjust the embedded control's value, then include the embedded control as part of the text alternative in the following manner:
    * If the embedded control has role textbox, return its value.
    * If the embedded control has role menu button, return the text alternative of the button.
    * If the embedded control has role combobox or listbox, return the text alternative of the chosen option.
    * If the embedded control has role range (e.g., a spinbutton or slider):
        * If the aria-valuetext property is present, return its value,
        * Otherwise, if the aria-valuenow property is present, return its value,
        * Otherwise, use the value as specified by a host language attribute.
6. Otherwise, if the current node's role allows name from content, or if the current node is referenced by aria-labelledby, aria-describedby, or is a native host language text alternative element (e.g. label in HTML), or is a descendant of a native host language text alternative element:
    1. Set the accumulated text to the empty string.
    2. Check for CSS generated textual content associated with the current node and include it in the accumulated text. The CSS :before and :after pseudo elements [CSS2] can provide textual content for elements that have a content model.
        * For :before pseudo elements, User agents MUST prepend CSS textual content, without a space, to the textual content of the current node.
        * For :after pseudo elements, User agents MUST append CSS textual content, without a space, to the textual content of the current node.
    3. For each child node of the current node:
        1. Set the current node to the child node.
        2. [walk=true] Compute the text alternative of the current node beginning with step 2. Set the result to that text alternative.
        3. Append the result to the accumulated text.
    4.    Return the accumulated text.
1. If the current node is a Text node, return its textual contents.

8. [walk] Otherwise, if the current node is a descendant of an element whose Accessible Name or Accessible Description is being computed, and contains descendants, proceed to 2F.i.
9. Otherwise, if the current node has a Tooltip attribute, return its value.
