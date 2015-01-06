walk(document.body);

function walk(node)
{
	// I stole this function from here:
	// http://is.gd/mwZp7E

	var child, next;

	switch ( node.nodeType )
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child )
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode)
{
	var v = textNode.nodeValue;

  // frank
	v = v.replace(/\bfuck\b/g, "frank");
	v = v.replace(/\bFuck\b/g, "Frank");
	v = v.replace(/\bFUCK\b/g, "FRANK");
	v = v.replace(/\bfucking\b/g, "franking");
	v = v.replace(/\bFucking\b/g, "Franking");
	v = v.replace(/\bFUCKING\b/g, "FRANKING");
	v = v.replace(/\bmotherfucker\b/g, "motherfranker");
	v = v.replace(/\bMotherfucker\b/g, "Motherfranker");
	v = v.replace(/\bMOTHERFUCKER\b/g, "MOTHERFRANKER");

  // bother
	v = v.replace(/\bshit\b/g, "bother");
	v = v.replace(/\bShit\b/g, "Bother");
	v = v.replace(/\bSHIT\b/g, "BOTHER");
	v = v.replace(/\bshitting\b/g, "bothering");
	v = v.replace(/\bShitting\b/g, "Bothering");
	v = v.replace(/\bSHITTING\b/g, "BOTHERING");
	v = v.replace(/\bbullshit\b/g, "darn bother");
	v = v.replace(/\bBullshit\b/g, "Darn bother");
	v = v.replace(/\bBULLSHIT\b/g, "DARN BOTHER");

  // dagnabit
	v = v.replace(/\bgoddamnit\b/g, "dagnabit");
	v = v.replace(/\bGoddamnit\b/g, "Dagnabit");
	v = v.replace(/\bGODDAMNIT\b/g, "DAGNABIT");
	v = v.replace(/\bgoddammit\b/g, "dagnabit");
	v = v.replace(/\bGoddammit\b/g, "Dagnabit");
	v = v.replace(/\bGODDAMMIT\b/g, "DAGNABIT");
	v = v.replace(/\bgod\ damnit\b/g, "dagnabit");
	v = v.replace(/\bGod\ damnit\b/g, "Dagnabit");
	v = v.replace(/\bGOD\ DAMNIT\b/g, "DAGNABIT");
	v = v.replace(/\bgod\ dammit\b/g, "dagnabit");
	v = v.replace(/\bGod\ dammit\b/g, "Dagnabit");
	v = v.replace(/\bGOD\ DAMMIT\b/g, "DAGNABIT");
	v = v.replace(/\bdammit\b/g, "bothering");
	v = v.replace(/\bDammit\b/g, "Bothering");
	v = v.replace(/\bDAMMIT\b/g, "BOTHERING");
	v = v.replace(/\bdamnit\b/g, "bothering");
	v = v.replace(/\bDamnit\b/g, "Bothering");
	v = v.replace(/\bDAMNIT\b/g, "BOTHERING");

	textNode.nodeValue = v;
}
